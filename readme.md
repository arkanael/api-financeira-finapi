# finapi

Botcamp Ignite (nodejs) - Rocketseat

# Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível deletar uma conta

# Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível excluir uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente

cpf - string
name - string
id - uuid
statement []

Comandos utilizados no desenvolvimento da aplicação:

- yarn add express
- yarn add nodemon -D

Tecnologias utilizadas no projeto

express
nodemon para restartar o projeto
uuid indentificador unico universal

GET => Buscar uma informação dentro do nosso servidor
POST => Inserir uma informação no servidor
PUT => Alterar uma informação no servidor
PATCH => Alterar uma informação espefica no servidor
DELETE => Deleta uma informação no servidor

Tipos de Parametros:

Route Params => Identificar um recurso, editar/deletar/buscar /:id
Query Params => Paginação / Filtro
Body Params => Os objetos inserção e alteração

Rotas utiizadas:
GET: /courses
POST: /account: Cadastrar uma nova conta:
PUT: /courses
PATCH: /courses
DELETE: /courses

Status Code:
status(201) => Criado com sucesso.
