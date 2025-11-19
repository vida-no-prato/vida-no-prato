/**
 * ============================================================
 * VIDA NO PRATO - Servidor Express Principal
 * ============================================================
 * Aplicação MVC para gerenciamento de cardápio e pedidos
 * Port: 3003
 */

const express = require('express');
const path = require('path');
const logger = require('./src/config/logger');

// ============================================================
// IMPORTAÇÕES DE ROTAS
// ============================================================
const routes = require('./src/routes');
const adminRoutes = require('./src/routes/admin');
const checkoutRoutes = require('./src/routes/checkout');

// ============================================================
// INICIALIZAÇÃO DO EXPRESS
// ============================================================
const app = express();

// ============================================================
// CONFIGURAÇÃO DO TEMPLATE ENGINE (EJS)
// ============================================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// ============================================================
// MIDDLEWARES
// ============================================================

// Middleware para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'src/public')));

// Middleware para parsing de dados de formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============================================================
// REGISTRAR ROTAS
// ============================================================
app.use('/', routes);
app.use('/admin', adminRoutes);
app.use('/checkout', checkoutRoutes);

// ============================================================
// MIDDLEWARE PARA TRATAMENTO DE ERROS 404
// ============================================================
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página não encontrada',
        message: 'A página que você está procurando não existe.'
    });
});

// ============================================================
// INICIALIZAR SERVIDOR
// ============================================================
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    logger.section('🌱 VIDA NO PRATO - Servidor Ativo');
    logger.success(`Servidor rodando na porta ${PORT}`);
    logger.info(`URL: http://localhost:${PORT}`);
    logger.info(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
    logger.info(`EJS Template Engine: Ativo`);
    console.log('');
});

module.exports = app;