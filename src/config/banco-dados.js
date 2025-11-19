/**
 * ============================================================
 * CONFIGURAÇÃO DE BANCO DE DADOS
 * ============================================================
 * Pool de conexões MySQL para a aplicação
 */

const mysql = require('mysql2/promise');

// ============================================================
// POOL DE CONEXÕES
// ============================================================
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'vida_no_prato',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Testar conexão
pool.getConnection()
    .then(conn => {
        console.log('✅ Conexão com banco de dados estabelecida');
        conn.release();
    })
    .catch(err => {
        console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    });

module.exports = pool;
