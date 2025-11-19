# Documentação de Rotas - Vida no Prato

## 📍 Rotas Públicas

### Home
- **GET** `/` - Página inicial com produtos e filtros
- **GET** `/about` - Página sobre

### Categorias
- **GET** `/categories` - Página de categorias
- **GET** `/categories?categoria=slug` - Produtos de uma categoria

### Produtos
- **GET** `/produtos` - Lista todos os produtos (JSON)
- **POST** `/produtos` - Criar produto (admin)
- **PUT** `/produtos/:id` - Atualizar produto (admin)
- **DELETE** `/produtos/:id` - Deletar produto (admin)

### Pedidos
- **GET** `/pedidos` - Ver histórico de pedidos
- **GET** `/rastreio` - Rastreio de pedidos
- **POST** `/pedido/criar` - Criar novo pedido

### Checkout
- **GET** `/checkout` - Página de checkout
- **POST** `/checkout/processar` - Processar pagamento
- **GET** `/pix` - Opção de pagamento PIX

## 👥 Rotas de Autenticação

### Login/Registro
- **POST** `/auth/register` - Registrar novo usuário
- **POST** `/auth/login` - Login de usuário (email/senha)
- **POST** `/auth/login-collaborator` - Login de colaborador (CNPJ/senha)
- **GET** `/auth/logout` - Deslogar usuário

### Perfil de Usuário
- **GET** `/usuario` - Página de perfil
- **GET** `/usuario/:id` - Dados específicos do usuário

## 🏢 Rotas de Colaboradores

### Painel Administrativo
- **GET** `/admin` - Painel de controle
- **GET** `/admin/dashboard` - Dashboard

### Perfil do Colaborador
- **GET** `/colaborador/perfil/:id` - Perfil do estabelecimento
- **PUT** `/colaborador/editar/:id` - Editar perfil

### Categorias (Admin)
- **GET** `/categorias` - Listar categorias (JSON)
- **POST** `/categorias` - Criar categoria
- **PUT** `/categorias/:id` - Editar categoria
- **DELETE** `/categorias/:id` - Deletar categoria

## 📊 Padrão de Resposta JSON

### Sucesso
```json
{
  "success": true,
  "message": "Operação realizada com sucesso",
  "data": {}
}
```

### Erro
```json
{
  "success": false,
  "message": "Descrição do erro"
}
```

## 🔐 Autenticação

- Endpoints de admin requerem login
- Colaboradores usam CNPJ + senha
- Usuários comuns usam email + senha

## 📝 Exemplos de Requisições

### Criar Produto
```javascript
POST /produtos
Content-Type: application/json

{
  "nome": "Salada Verde",
  "preco": 25.90,
  "categoria_id": 1,
  "emoji": "🥗",
  "descricao": "Salada fresca com hortaliças do dia"
}
```

### Login Colaborador
```javascript
POST /auth/login-collaborator
Content-Type: application/json

{
  "cnpj": "00000000000000",
  "senha": "sua_senha"
}
```

### Criar Pedido
```javascript
POST /pedido/criar
Content-Type: application/json

{
  "cliente_nome": "João Silva",
  "cliente_email": "joao@email.com",
  "cliente_telefone": "(11) 99999-9999",
  "itens": [
    {
      "produto_id": 1,
      "quantidade": 2,
      "preco": 25.90
    }
  ]
}
```

---

**Para mais informações, consulte README.md**
