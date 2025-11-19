const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const pool = require('../config/banco-dados');

// Rota para exibir perfil do colaborador
router.get('/perfil/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id || isNaN(id)) {
      return res.status(400).render('error', { 
        title: 'ID inválido',
        message: 'O ID do estabelecimento é inválido.' 
      });
    }

    const estabelecimento = await Usuario.buscarPorId(id);
    
    if (!estabelecimento) {
      console.warn(`Estabelecimento com ID ${id} não encontrado`);
      return res.status(404).render('404', { 
        title: 'Estabelecimento não encontrado',
        message: 'O estabelecimento que você procura não existe.' 
      });
    }

    // Buscar produtos do estabelecimento
    let produtos = [];
    try {
      const [rows] = await pool.query(
        `SELECT p.id, p.nome, p.emoji, p.preco, c.nome as categoria
         FROM produtos p
         LEFT JOIN categorias c ON p.categoria_id = c.id
         ORDER BY p.nome`
      );
      produtos = rows || [];
    } catch (err) {
      console.log('Aviso: Tabela produtos pode não existir ainda:', err.message);
      produtos = [];
    }

    res.render('perfil-colaborador', { 
      estabelecimento,
      produtos,
      title: `Perfil - ${estabelecimento.nome}`
    });
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).render('error', { 
      title: 'Erro Interno',
      message: 'Erro ao carregar o perfil do estabelecimento. ' + error.message
    });
  }
});

module.exports = router;
