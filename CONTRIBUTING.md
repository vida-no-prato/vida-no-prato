# Guia de Contribuição - Vida no Prato

## 📋 Padrões de Código

### Estrutura de Pastas
```
src/
├── config/          # Configurações (BD, upload, etc)
├── controllers/     # Lógica de controle
├── models/          # Modelos de dados
├── public/          # Arquivos estáticos
│   ├── css/
│   ├── js/
│   └── images/
├── routes/          # Definição de rotas
└── views/           # Templates EJS
```

### Nomenclatura de Arquivos

- **Controllers**: `nomeController.js` (ex: `produtoController.js`)
- **Models**: `nome.js` (ex: `produto.js`)
- **Routes**: `nome.js` (ex: `produtos.js`)
- **Views**: `nome.ejs` (ex: `index.ejs`)
- **CSS**: `nome.css` (ex: `vida-no-prato.css`)
- **JS Frontend**: `script.js`

### Padrão de Comentários

```javascript
// ============================================================
// NOME DA SEÇÃO
// ============================================================

// Comentário de linha simples
const variavel = valor;

/**
 * Descrição de função
 * @param {type} param - Descrição do parâmetro
 * @returns {type} - Descrição do retorno
 */
function minhaFuncao(param) {
  // implementação
}
```

## 🚀 Como Configurar o Ambiente

1. Clone o repositório
2. Copie `.env.example` para `.env` e configure
3. Execute `npm install`
4. Para desenvolvimento: `npm run dev`
5. Para produção: `npm start`

## 📝 Adicionar Nova Feature

1. Crie o model em `src/models/`
2. Crie o controller em `src/controllers/`
3. Crie as rotas em `src/routes/`
4. Crie as views em `src/views/`
5. Adicione os estilos em `src/public/css/`
6. Registre as rotas em `src/routes/index.js`

## 🗄️ Banco de Dados

### Migrations
- Coloque scripts SQL em `migrations/`
- Execute com `node migrate.js`

### Modelos
- Cada entidade deve ter um arquivo em `src/models/`
- Implemente métodos CRUD básicos

## 📱 Responsividade

- Use breakpoints padrão: 768px (tablet), 1024px (desktop)
- Sempre teste em mobile first
- Verifique em `src/public/css/` as media queries

## 🧪 Testes

Antes de fazer commit:
1. Teste todas as rotas
2. Verifique responsividade
3. Inspecione console do navegador (F12)
4. Valide dados de formulários

## 🔒 Segurança

- Sempre valide entrada de dados no backend
- Use `bcryptjs` para senhas
- Escape dados do usuário em templates EJS
- Não exponha dados sensíveis em frontend

## 📚 Documentação

- Mantenha `README.md` atualizado
- Documenten novas rotas/controllers
- Adicione comentários em lógica complexa

---

**Dúvidas?** Verifique `README.md` ou inspecione código existente para exemplos.
