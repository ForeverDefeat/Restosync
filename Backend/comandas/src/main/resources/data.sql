-- ══════════════════════════════════════════════════════════════════════════════
-- RestoSync — Datos Iniciales
-- ══════════════════════════════════════════════════════════════════════════════

-- Nota: Las contraseñas se insertan como bcrypt hasheadas. 
-- Para la contraseña "123456", el hash bcrypt es:
-- $2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ

-- ── Insertar usuarios ────────────────────────────────────────────────────────

INSERT IGNORE INTO users (id, name, email, password, role, active, created_at) VALUES
-- Admin
(1, 'Admin', 'admin@restosync.com', '$2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ', 'ADMINISTRADOR', true, NOW()),

-- Meseros
(2, 'Juan Pérez', 'juan@restosync.com', '$2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ', 'MESERO', true, NOW()),
(3, 'María García', 'maria@restosync.com', '$2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ', 'MESERO', true, NOW()),

-- Cocinero
(4, 'Carlos López', 'carlos@restosync.com', '$2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ', 'COCINERO', true, NOW()),

-- Bartender
(5, 'Roberto Fernández', 'roberto@restosync.com', '$2a$10$7J3.Q4JjT5.G9VdQE3T2xuq7A6N9.0Zq0qZ0/0qJ.0qJ.0qJ.0qJ', 'BARTENDER', true, NOW());

-- ── Insertar productos (platos) ──────────────────────────────────────────────

INSERT IGNORE INTO products (id, name, category, price, available, estimated_minutes, created_at, updated_at) VALUES
-- Platos principales
(1, 'Hamburguesa Clásica', 'PLATO', 9.99, true, 15, NOW(), NOW()),
(2, 'Pechuga de Pollo a la Parrilla', 'PLATO', 12.99, true, 18, NOW(), NOW()),
(3, 'Filete de Res', 'PLATO', 18.99, true, 20, NOW(), NOW()),
(4, 'Pasta a la Carbonara', 'PLATO', 11.99, true, 12, NOW(), NOW()),
(5, 'Salmón a la Mantequilla', 'PLATO', 16.99, true, 15, NOW(), NOW()),

-- Acompañamientos
(6, 'Papas Fritas', 'PLATO', 3.99, true, 8, NOW(), NOW()),
(7, 'Ensalada César', 'PLATO', 7.99, true, 5, NOW(), NOW()),
(8, 'Arroz Blanco', 'PLATO', 2.99, true, 5, NOW(), NOW()),

-- Bebidas
(9, 'Coca Cola', 'BEBIDA', 2.50, true, 1, NOW(), NOW()),
(10, 'Agua Mineral', 'BEBIDA', 1.50, true, 1, NOW(), NOW()),
(11, 'Cerveza Artesanal', 'BEBIDA', 5.50, true, 2, NOW(), NOW()),
(12, 'Vino Tinto Reserva', 'BEBIDA', 8.99, true, 1, NOW(), NOW()),
(13, 'Mojito', 'BEBIDA', 6.99, true, 5, NOW(), NOW()),
(14, 'Jugo Natural', 'BEBIDA', 3.99, true, 3, NOW(), NOW());

-- ── Insertar órdenes de ejemplo (opcional) ───────────────────────────────────

INSERT IGNORE INTO orders (id, ticket_number, table_or_register, status, total, waiter_id, created_at, updated_at) VALUES
(1, 'T001', 'Mesa 1', 'PENDIENTE', 25.98, 2, NOW(), NOW()),
(2, 'T002', 'Caja 1', 'EN_PREPARACION', 18.99, 3, NOW(), NOW());

-- ── Insertar ítems de órdenes de ejemplo ──────────────────────────────────────

INSERT IGNORE INTO order_items (id, order_id, product_id, product_name, category, quantity, unit_price, notes) VALUES
(1, 1, 1, 'Hamburguesa Clásica', 'PLATO', 2, 9.99, 'Sin cebolla'),
(2, 1, 9, 'Coca Cola', 'BEBIDA', 2, 2.50, NULL),
(3, 2, 3, 'Filete de Res', 'PLATO', 1, 18.99, 'Término medio');
