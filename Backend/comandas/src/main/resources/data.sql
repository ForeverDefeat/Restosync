-- ══════════════════════════════════════════════════════════════════════════════
-- RestoSync — Datos iniciales
-- Contraseña de TODOS los usuarios: 123456
-- Hash BCrypt $2a$10$ válido generado y verificado
-- ══════════════════════════════════════════════════════════════════════════════

-- ── Usuarios ─────────────────────────────────────────────────────────────────

INSERT IGNORE INTO users (id, name, email, password, role, active, created_at) VALUES
(1, 'Sarah Jenkins',     'admin@restosync.com',   '$2a$10$Nl3fnwI.Bd0vOhvjMsC7SeElA.lpmEwBwAsQ2DfPxWYeMqS67iwki', 'ADMINISTRADOR', true, NOW()),
(2, 'James Williams',    'james@restosync.com',   '$2a$10$Nl3fnwI.Bd0vOhvjMsC7SeElA.lpmEwBwAsQ2DfPxWYeMqS67iwki', 'MESERO',        true, NOW()),
(3, 'Elena Rodriguez',   'elena@restosync.com',   '$2a$10$Nl3fnwI.Bd0vOhvjMsC7SeElA.lpmEwBwAsQ2DfPxWYeMqS67iwki', 'MESERO',        true, NOW()),
(4, 'Mike Torres',       'mike@restosync.com',    '$2a$10$Nl3fnwI.Bd0vOhvjMsC7SeElA.lpmEwBwAsQ2DfPxWYeMqS67iwki', 'COCINERO',      true, NOW()),
(5, 'Roberto Fernandez', 'roberto@restosync.com', '$2a$10$Nl3fnwI.Bd0vOhvjMsC7SeElA.lpmEwBwAsQ2DfPxWYeMqS67iwki', 'BARTENDER',     true, NOW());

-- ── Productos — Platos ───────────────────────────────────────────────────────

INSERT IGNORE INTO products (id, name, category, price, available, estimated_minutes, image_url, created_at, updated_at) VALUES
(1,  'Smash Burger Especial',   'PLATO', 14.50, true, 12, NULL, NOW(), NOW()),
(2,  'Papas Trufadas',          'PLATO',  8.00, true,  8, NULL, NOW(), NOW()),
(3,  'Salmon a la Parrilla',    'PLATO', 22.50, true, 18, NULL, NOW(), NOW()),
(4,  'Ensalada Cesar',          'PLATO', 11.00, true,  5, NULL, NOW(), NOW()),
(5,  'Ribeye 12oz',             'PLATO', 35.00, true, 20, NULL, NOW(), NOW()),
(6,  'Pizza Margarita',         'PLATO', 14.00, true, 15, NULL, NOW(), NOW()),
(7,  'Risotto de Champinones',  'PLATO', 13.50, true, 14, NULL, NOW(), NOW()),
(8,  'Pechuga Rellena',         'PLATO', 15.00, true, 16, NULL, NOW(), NOW()),
(9,  'Bowl Vegano',             'PLATO', 12.00, true,  8, NULL, NOW(), NOW()),
(10, 'Tacos al Pastor',         'PLATO',  9.50, true, 10, NULL, NOW(), NOW());

-- ── Productos — Bebidas ──────────────────────────────────────────────────────

INSERT IGNORE INTO products (id, name, category, price, available, estimated_minutes, image_url, created_at, updated_at) VALUES
(11, 'Margarita Picante',       'BEBIDA', 10.50, true, 5, NULL, NOW(), NOW()),
(12, 'Mojito Clasico',          'BEBIDA',  9.50, true, 5, NULL, NOW(), NOW()),
(13, 'Agua Mineral',            'BEBIDA',  3.00, true, 1, NULL, NOW(), NOW()),
(14, 'Jugo de Naranja Natural', 'BEBIDA',  4.50, true, 3, NULL, NOW(), NOW()),
(15, 'Cerveza Artesanal IPA',   'BEBIDA',  6.00, true, 2, NULL, NOW(), NOW()),
(16, 'Vino Tinto Copa',         'BEBIDA',  8.00, true, 1, NULL, NOW(), NOW());

-- ── Órdenes de ejemplo ───────────────────────────────────────────────────────

INSERT IGNORE INTO orders (id, ticket_number, table_or_register, status, total, waiter_id, cancellation_reason, created_at, updated_at) VALUES
(1, '#8921', 'Mesa 12', 'PENDIENTE',      36.50, 2, NULL, NOW(), NOW()),
(2, '#8915', 'Mesa 08', 'EN_PREPARACION', 78.00, 2, NULL, NOW(), NOW()),
(3, '#8910', 'Mesa 21', 'LISTO',          36.00, 3, NULL, NOW(), NOW()),
(4, '#8912', 'Mesa 05', 'LISTO',          12.00, 3, NULL, NOW(), NOW()),
(5, '#8918', 'Mesa 15', 'EN_PREPARACION', 42.00, 2, NULL, NOW(), NOW());

-- ── Ítems de órdenes ─────────────────────────────────────────────────────────

INSERT IGNORE INTO order_items (id, order_id, product_id, product_name, category, quantity, unit_price, notes) VALUES
-- Orden 1 — Mesa 12 PENDIENTE (total: 14.50*2 + 8.00 = 37.00)
(1,  1, 1, 'Smash Burger Especial', 'PLATO',  2, 14.50, 'Sin cebolla, extra queso'),
(2,  1, 2, 'Papas Trufadas',        'PLATO',  1,  8.00, NULL),

-- Orden 2 — Mesa 08 EN_PREPARACION (total: 35.00*2 + 8.00 = 78.00)
(3,  2, 5, 'Ribeye 12oz',           'PLATO',  2, 35.00, 'Termino medio'),
(4,  2, 2, 'Papas Trufadas',        'PLATO',  1,  8.00, NULL),

-- Orden 3 — Mesa 21 LISTO (total: 14.00*2 + 8.00 = 36.00)
(5,  3, 6, 'Pizza Margarita',       'PLATO',  2, 14.00, NULL),
(6,  3, 2, 'Papas Trufadas',        'PLATO',  1,  8.00, 'Salsa aparte'),

-- Orden 4 — Mesa 05 LISTO (total: 12.00)
(7,  4, 9, 'Bowl Vegano',           'PLATO',  1, 12.00, NULL),

-- Orden 5 — Mesa 15 EN_PREPARACION (total: 13.50*2 + 15.00 = 42.00)
(8,  5, 7, 'Risotto de Champinones','PLATO',  2, 13.50, NULL),
(9,  5, 8, 'Pechuga Rellena',       'PLATO',  1, 15.00, NULL);