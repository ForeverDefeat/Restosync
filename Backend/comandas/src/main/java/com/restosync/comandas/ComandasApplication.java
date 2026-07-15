package com.restosync.comandas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/** Punto de entrada que inicializa el contexto Spring Boot de la API RestoSync. */
@SpringBootApplication
public class ComandasApplication {

	/** Inicia el servidor HTTP, la persistencia, seguridad y mensajería WebSocket. */
	public static void main(String[] args) {
		SpringApplication.run(ComandasApplication.class, args);
	}

}
