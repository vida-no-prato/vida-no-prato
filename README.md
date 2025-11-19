# Projeto MVC - Vida no Prato

Este repositório é uma aplicação web em arquitetura MVC (Model-View-Controller) para um site/mini-e-commerce de alimentação saudável chamado **Vida no Prato**. O projeto usa Node.js, Express e EJS para servir páginas dinâmicas com um pequeno fluxo de pedido (carrinho/checkout) e um painel administrativo básico.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para roteamento e middleware
- **EJS** - Template engine para views dinâmicas
- **CSS3** - Estilos e responsividade (arquivos em `src/public/css`)
- **JavaScript (frontend)** - Interação cliente (arquivo `src/public/js/script.js`)
- **mysql2** - Driver MySQL preparado para uso em `src/config/banco-dados.js` (opcional)

## 📁 Estrutura do Projeto

```
mvc/
├── app.js                         # Servidor principal (configuração do Express)
├── package.json                   # Dependências e scripts
├── README.md                      # Documentação (este arquivo)
└── src/                           # Código fonte da aplicação
    ├── config/                    # Configurações (DB, upload, etc.)
    │   ├── banco-dados.js         # Configuração de conexão (mysql2)
    │   └── upload.js              # Configurações para upload de imagens
    ├── controllers/               # Lógica de controle das rotas
    │   ├── categoriaController.js
    │   ├── homeController.js
    │   ├── pedidoController.js
    │   ├── produtoController.js
    │   └── usuarioController.js
    ├── models/                    # Modelos / representações de dados
    │   ├── categoria.js
    │   ├── dataModel.js
    │   ├── itemPedido.js
    │   ├── pedido.js
    │   ├── produto.js
    │   ├── userModel.js
    │   └── usuario.js
    ├── public/                    # Arquivos públicos (estáticos)
    │   ├── css/
    │   │   ├── vida-no-prato.css
    │   │   ├── about.css
    │   │   └── painel-admin.css
    │   ├── images/
    │   │   └── uploads/           # Imagens enviadas
    │   └── js/
    │       └── script.js
    ├── routes/                     # Definições de rotas da aplicação
    │   ├── admin.js
    │   ├── auth.js
    │   ├── categorias.js
    │   ├── checkout.js
    │   ├── home.js
    │   ├── index.js
    │   ├── pedido.js
    │   └── produtos.js
    └── views/                      # Templates EJS
        ├── 404.ejs
        ├── about.ejs
        ├── admin.ejs
        ├── categories.ejs
        ├── checkout.ejs
        ├── error.ejs
        ├── index.ejs
        ├── pedidos.ejs
        ├── pix.ejs
        ├── rastreio.ejs
        ├── usuario.ejs
        └── partials/
            └── modals.ejs
```

## 🏗️ Arquitetura MVC (Visão Geral)

### Model
- Os arquivos em `src/models/` representam entidades e contêm funções/estruturas que manipulam os dados do domínio (produtos, categorias, pedidos, usuários). Podem ser adaptados para persistência real (MySQL) no futuro.

### View
- As páginas EJS em `src/views/` geram o HTML dinâmico no servidor. Partials (como `partials/modals.ejs`) são usados para componentes reaproveitáveis (modais, toasts, etc.).

### Controller
- Os arquivos em `src/controllers/` recebem requisições, consultam modelos e retornam views com os dados adequados. Controllers como `produtoController.js` e `pedidoController.js` lidam com fluxo de compras e checkout.

### Routes
- As rotas em `src/routes/` mapeiam URLs para controllers. `index.js` geralmente importa e aplica todas as sub-rotas ao app Express.

## 🎛️ Funcionalidades Principais

- Página inicial com listagem de produtos e filtros por categoria
- Sistema simples de carrinho no frontend (adicionar/remoção de itens)
- Fluxo de checkout com página `checkout.ejs` e opções (ex: PIX)
- Páginas de administração (`/admin`) para gerenciar produtos/categorias (básico)
- Upload de imagens (configuração em `src/config/upload.js`)
- Páginas de rastreio e pedidos para o usuário

## 🖼️ Views e UI

- `index.ejs` renderiza o cardápio, hero e componentes do site
- `categories.ejs` mostra as categorias e produtos filtrados
- `admin.ejs` e `painel-admin.css` fornecem uma interface administrativa básica
- Estilos principais estão em `src/public/css/vida-no-prato.css`

## 🚦 Como Executar (Local)

### 1. Instalar dependências
```bash
npm install
```

### 2. Variáveis de ambiente
- Se for usar MySQL/remoção de dados reais, configure as variáveis apropriadas (veja `src/config/banco-dados.js`). Caso contrário, o projeto pode rodar com dados de exemplo em `src/models/dataModel.js`.

### 3. Executar em desenvolvimento
```bash
npm run dev
```

### 4. Abrir no navegador
Abra: `http://localhost:3000`

## 📋 Scripts úteis

- `npm run dev` — executa com `nodemon` (se presente no `package.json`)
- `npm start` — inicia a aplicação com Node (se configurado)

## 🔧 Dependências (resumo)

- `express` — servidor web
- `ejs` — template engine
- `mysql2` — driver MySQL (opcional)
- `multer` (possivelmente) — upload de arquivos (ver `src/config/upload.js`)
- `nodemon` — dev dependency para hot reload

Verifique o `package.json` para a lista completa e versões instaladas.

## 📱 Acessibilidade e Responsividade

- Layout responsivo com breakpoints para mobile/tablet
- Componentes reutilizáveis e semântica HTML adequada nas views

## 🔮 Próximos passos e melhorias sugeridas

1. Integrar banco de dados MySQL para persistência de produtos, usuários e pedidos
2. Adicionar autenticação/autorizações para o painel administrativo
3. Validação de formulários e testes automatizados (unit/integração)
4. Implementar API RESTful para integração com frontends externos
5. Melhorar UX do checkout (pagamentos reais, notificações)

## 👨‍💻 Desenvolvimento

Para modificar o projeto, pontos chave:

1. **Dados**: `src/models/` — adapte ou conecte a um banco
2. **Roteamento**: `src/routes/` — adicione rotas e middlewares
3. **Lógica**: `src/controllers/` — regras de negócio e chamadas aos modelos
4. **Views**: `src/views/` — atualize EJS e partials
5. **Estilos**: `src/public/css/` — ajuste `vida-no-prato.css` e outros arquivos

---

**Desenvolvido com ❤️ pela equipe Vida no Prato.**