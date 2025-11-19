/**
 * ============================================================
 * CONFIGURAÇÃO DE UPLOAD DE ARQUIVOS
 * ============================================================
 * Multer para upload de imagens de produtos
 */

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ============================================================
// DIRETÓRIO DE UPLOADS
// ============================================================
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'src/public/images/uploads/';
const MAX_FILE_SIZE = process.env.MAX_FILE_SIZE || (5 * 1024 * 1024); // 5MB

// Criar diretório se não existir
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    console.log(`✅ Diretório de uploads criado: ${UPLOAD_DIR}`);
}

// ============================================================
// CONFIGURAÇÃO DE ARMAZENAMENTO
// ============================================================
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const filename = 'produto-' + uniqueSuffix + ext;
        cb(null, filename);
    }
});

// ============================================================
// FILTRO DE ARQUIVOS
// ============================================================
const fileFilter = (req, file, cb) => {
    // Tipos de arquivo permitidos
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    }

    cb(new Error('Erro: Apenas imagens (jpeg, jpg, png, gif, webp) são permitidas!'));
};

// ============================================================
// INSTÂNCIA MULTER
// ============================================================
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: MAX_FILE_SIZE
    }
});

module.exports = upload;
