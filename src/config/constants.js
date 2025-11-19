/**
 * ============================================================
 * CONSTANTES GLOBAIS DA APLICAÇÃO
 * ============================================================
 * Configurações centralizadas para facilitar manutenção
 */

// ============================================================
// CONFIGURAÇÕES DO SERVIDOR
// ============================================================
const PORT = process.env.PORT || 3003;
const NODE_ENV = process.env.NODE_ENV || 'development';
const APP_NAME = 'Vida no Prato';
const APP_VERSION = '1.0.0';

// ============================================================
// CONFIGURAÇÕES DE UPLOAD
// ============================================================
const UPLOAD_CONFIG = {
    DIR: process.env.UPLOAD_DIR || 'src/public/images/uploads/',
    MAX_SIZE: process.env.MAX_FILE_SIZE || (5 * 1024 * 1024), // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.webp']
};

// ============================================================
// CONFIGURAÇÕES DE AUTENTICAÇÃO
// ============================================================
const AUTH_CONFIG = {
    SALT_ROUNDS: 10, // Rodadas de bcrypt
    JWT_SECRET: process.env.JWT_SECRET || 'seu_jwt_secret_aqui',
    SESSION_SECRET: process.env.SESSION_SECRET || 'seu_session_secret_aqui',
    TOKEN_EXPIRY: '7d'
};

// ============================================================
// CONFIGURAÇÕES DE BANCO DE DADOS
// ============================================================
const DB_CONFIG = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'root',
    NAME: process.env.DB_NAME || 'vida_no_prato',
    PORT: process.env.DB_PORT || 3306
};

// ============================================================
// CONFIGURAÇÕES DE PAGINAÇÃO
// ============================================================
const PAGINATION = {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100
};

// ============================================================
// MENSAGENS PADRÃO
// ============================================================
const MESSAGES = {
    SUCCESS: 'Operação realizada com sucesso',
    ERROR: 'Erro ao processar a solicitação',
    INVALID_DATA: 'Dados inválidos fornecidos',
    NOT_FOUND: 'Registro não encontrado',
    UNAUTHORIZED: 'Acesso não autorizado',
    SERVER_ERROR: 'Erro interno do servidor'
};

// ============================================================
// STATUS HTTP
// ============================================================
const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_ERROR: 500
};

// ============================================================
// ROTAS PÚBLICAS (sem autenticação)
// ============================================================
const PUBLIC_ROUTES = [
    '/',
    '/about',
    '/categories',
    '/auth/register',
    '/auth/login',
    '/auth/login-collaborator'
];

module.exports = {
    PORT,
    NODE_ENV,
    APP_NAME,
    APP_VERSION,
    UPLOAD_CONFIG,
    AUTH_CONFIG,
    DB_CONFIG,
    PAGINATION,
    MESSAGES,
    HTTP_STATUS,
    PUBLIC_ROUTES
};
