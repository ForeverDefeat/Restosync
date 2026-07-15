package com.restosync.comandas.service;

import com.restosync.comandas.exception.TooManyLoginAttemptsException;
import com.restosync.comandas.util.TextNormalizer;
import org.springframework.stereotype.Service;

import java.time.Clock;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Limita intentos de autenticación fallidos en memoria por correo e IP durante
 * una ventana temporal, reduciendo ataques de fuerza bruta sobre el login.
 */
@Service
public class LoginAttemptService {

    private static final int MAX_ATTEMPTS = 5;
    private static final int WINDOW_MINUTES = 15;

    private final Clock clock = Clock.systemUTC();
    private final Map<String, AttemptBucket> attempts = new ConcurrentHashMap<>();

    /** Rechaza el login cuando la combinación correo/IP agotó sus intentos. */
    public void assertNotBlocked(String email, String remoteAddress) {
        String key = key(email, remoteAddress);
        AttemptBucket bucket = attempts.get(key);
        if (bucket == null) return;

        if (bucket.expiresAt.isBefore(Instant.now(clock))) {
            attempts.remove(key);
            return;
        }

        if (bucket.count >= MAX_ATTEMPTS) {
            throw new TooManyLoginAttemptsException();
        }
    }

    /** Incrementa el contador y crea una nueva ventana cuando la anterior expiró. */
    public void recordFailure(String email, String remoteAddress) {
        attempts.compute(key(email, remoteAddress), (ignored, existing) -> {
            Instant now = Instant.now(clock);
            if (existing == null || existing.expiresAt.isBefore(now)) {
                return new AttemptBucket(1, now.plus(WINDOW_MINUTES, ChronoUnit.MINUTES));
            }
            return new AttemptBucket(existing.count + 1, existing.expiresAt);
        });
    }

    /** Limpia los fallos acumulados después de una autenticación correcta. */
    public void recordSuccess(String email, String remoteAddress) {
        attempts.remove(key(email, remoteAddress));
    }

    /** Construye una clave normalizada que aísla los intentos por correo e IP. */
    private String key(String email, String remoteAddress) {
        return (TextNormalizer.email(email) + "|" + remoteAddress).toLowerCase();
    }

    /** Mantiene el número de fallos y el instante en que deja de aplicarse el bloqueo. */
    private record AttemptBucket(int count, Instant expiresAt) {
    }
}
