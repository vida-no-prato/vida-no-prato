/**
 * ============================================================
 * UTILITÁRIOS DE LOG
 * ============================================================
 * Funções para logging estruturado da aplicação
 */

const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

/**
 * Log de sucesso
 * @param {string} message - Mensagem a logar
 */
function success(message) {
    console.log(`${colors.green}✅${colors.reset} ${message}`);
}

/**
 * Log de erro
 * @param {string} message - Mensagem a logar
 */
function error(message) {
    console.error(`${colors.red}❌${colors.reset} ${message}`);
}

/**
 * Log de aviso
 * @param {string} message - Mensagem a logar
 */
function warning(message) {
    console.warn(`${colors.yellow}⚠️${colors.reset} ${message}`);
}

/**
 * Log de informação
 * @param {string} message - Mensagem a logar
 */
function info(message) {
    console.log(`${colors.blue}ℹ️${colors.reset} ${message}`);
}

/**
 * Log de seção
 * @param {string} title - Título da seção
 */
function section(title) {
    console.log(`\n${colors.cyan}${colors.bright}═══════════════════════════════════${colors.reset}`);
    console.log(`${colors.cyan}${colors.bright}${title}${colors.reset}`);
    console.log(`${colors.cyan}${colors.bright}═══════════════════════════════════${colors.reset}\n`);
}

module.exports = {
    success,
    error,
    warning,
    info,
    section
};
