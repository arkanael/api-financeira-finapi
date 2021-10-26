# finapi

Botcamp Ignite (nodejs) - Rocketseat
Tecnologias utilizadas no projeto

express
nodemon para reinicar o projeto de forma mais simples
uuid indentificador unico universal

# Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [ ] Deve ser possível realizar um depósito
- [ ] Deve ser possível realizar um saque
- [ ] Deve ser possível buscar o extrato bancário do cliente por data
- [ ] Deve ser possível atualizar dados da conta do cliente
- [ ] Deve ser possível obter dados da conta do cliente
- [ ] Deve ser possível deletar uma conta

# Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [ ] Não deve ser possível buscar extrato em uma conta não existente
- [ ] Não deve ser possível fazer saque em uma conta não existente
- [ ] Não deve ser possível excluir uma conta não existente
- [ ] Não deve ser possível fazer saque quando o saldo for insuficiente

Dados da Conta:
Campo cpf - string
Campo name - string
Campo id - uuid
Campo statement - []

Rotas utiizadas:
GET: /statement/:cpf - Busca os statement da conta com o cpf.
POST: /account - Cadastrar uma nova conta:
PUT: /courses
PATCH: /courses
DELETE: /courses

Status Code:
status(201) => Criado com sucesso.
status(404) => Conta não encontrada

GET => Buscar uma informação dentro do nosso servidor
POST => Inserir uma informação no servidor
PUT => Alterar uma informação no servidor
PATCH => Alterar uma informação espefica no servidor
DELETE => Deleta uma informação no servidor

Comandos utilizados no desenvolvimento da aplicação:

- yarn add express
- yarn add nodemon -D
- yarn add
