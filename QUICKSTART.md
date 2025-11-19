# 🚀 Quick Start - Vida no Prato

## ⚡ Iniciar Rápido

### 1. Instalação
```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env
```

### 2. Configurar Banco de Dados
```bash
# Se usar MySQL, configure em .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=vida_no_prato

# Executar migrations
node migrate.js
```

### 3. Iniciar o Servidor
```bash
# Desenvolvimento (com hot-reload)
npm run dev

# Ou produção
npm start
```

### 4. Acessar a Aplicação
```
http://localhost:3003
```

## 🌐 URLs Principais

| Página | URL |
|--------|-----|
| Home | http://localhost:3003 |
| Categorias | http://localhost:3003/categories |
| Painel Admin | http://localhost:3003/admin |
| Perfil Colaborador | http://localhost:3003/colaborador/perfil/1 |
| Pedidos | http://localhost:3003/pedidos |

## 🔐 Credenciais de Teste

### Colaborador (Admin)
```
CNPJ: 00000000000000
Senha: admin
```

## 📂 Estrutura Essencial

- `app.js` - Servidor principal
- `src/routes/` - Rotas da aplicação
- `src/controllers/` - Lógica de negócio
- `src/models/` - Dados e banco
- `src/views/` - Templates HTML (EJS)
- `src/public/` - CSS, JS, imagens

## 🛠️ Comandos Úteis

```bash
# Instalar nova dependência
npm install nome-do-pacote

# Instalar dependência de desenvolvimento
npm install --save-dev nome-do-pacote

# Ver dependências instaladas
npm list

# Atualizar dependências
npm update
```

## 📚 Documentação

- **README.md** - Documentação completa
- **ESTRUTURA.md** - Estrutura do projeto
- **API.md** - Endpoints da API
- **CONTRIBUTING.md** - Guia de desenvolvimento

## 🐛 Troubleshooting

### Porta 3003 já em uso
```bash
# Linux/Mac: Liberar porta
lsof -i :3003
kill -9 <PID>

# Windows: Use outro terminal ou mude a porta em .env
PORT=3004
```

### Erro de banco de dados
1. Verifique se MySQL está rodando
2. Confira credenciais em `.env`
3. Execute `node migrate.js`

### Módulos não encontrados
```bash
# Reinstalar dependências
rm -rf node_modules
npm install
```

---

**Precisa de mais ajuda?** Veja `README.md` ou `CONTRIBUTING.md`
