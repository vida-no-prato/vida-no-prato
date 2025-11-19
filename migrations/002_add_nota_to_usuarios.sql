-- Migração: Adicionar coluna nota (rating) à tabela usuarios
-- Data: 2025-11-17

ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS nota DECIMAL(3, 2) DEFAULT 5.00;
ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS descricao_estabelecimento TEXT;
