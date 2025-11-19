const pool = require('./src/config/banco-dados');

async function runMigration() {
  try {
    console.log('Iniciando migração...');

    // Adicionar coluna nota (ignorar se já existir)
    try {
      await pool.query(`
        ALTER TABLE usuarios 
        ADD COLUMN nota DECIMAL(3, 2) DEFAULT 5.00
      `);
      console.log('✓ Coluna "nota" adicionada com sucesso');
    } catch (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
        console.log('✓ Coluna "nota" já existe');
      } else {
        throw err;
      }
    }

    // Adicionar coluna descricao_estabelecimento (ignorar se já existir)
    try {
      await pool.query(`
        ALTER TABLE usuarios 
        ADD COLUMN descricao_estabelecimento TEXT
      `);
      console.log('✓ Coluna "descricao_estabelecimento" adicionada com sucesso');
    } catch (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
        console.log('✓ Coluna "descricao_estabelecimento" já existe');
      } else {
        throw err;
      }
    }

    console.log('\n✅ Migração concluída com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro na migração:', error.message);
    process.exit(1);
  }
}

runMigration();
