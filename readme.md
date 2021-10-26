# 🏛 FinAPI - Financeira

FINAPI - API financeira para transações bancarias, podendo criar uma conta, ver o extrato bancário, realizar um saque etc.

## 💻 Sobre o Projeto

Esse é o Primeiro projeto do bootcamp do Ignite da Rocketseat, desenvolvida nas aulas do primeiro capitulo do curso Ignite, com o intuito de colocar em prática os fundamentos do NodeJs.

### 🧪 Tecnologias

- NodeJs (https://nodejs.org/)
- Express (https://expressjs.com/)
- Uuidv4 (https://www.npmjs.com/package/uuidv4)

### 🛠 Features

- Cadastro de conta.
- Atualizar dados de conta.
- Desativar uma conta.
- Realizar depósito.
- Realizar saque.
- Buscar extrato bancário.
- Buscar extrato bancário por data.

### 🟢 Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [ ] Deve ser possível realizar um depósito
- [ ] Deve ser possível realizar um saque
- [ ] Deve ser possível buscar o extrato bancário do cliente por data
- [ ] Deve ser possível atualizar dados da conta do cliente
- [ ] Deve ser possível obter dados da conta do cliente
- [ ] Deve ser possível deletar uma conta

### 🔴 Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [ ] Não deve ser possível buscar extrato em uma conta não existente
- [ ] Não deve ser possível fazer saque em uma conta não existente
- [ ] Não deve ser possível excluir uma conta não existente
- [ ] Não deve ser possível fazer saque quando o saldo for insuficiente

### 💲 Dados da Conta:

Campo cpf - string
Campo name - string
Campo id - uuid
Campo statement - []

### 🌉 Rotas utiizadas:

- GET: /version - Informa a versão do servidor.
- GET: /statement/:cpf - Busca os statement da conta com o cpf.
- POST: /account - Cadastrar uma nova conta:
- POST: /deposit - Fazer um novo deposito em uma conta:
- PUT: /
- PATCH: /
- DELETE: /

### 🆎 Status Code:

- status(201) => Criado com sucesso.
- status(404) => Conta não encontrada

### 📚 Legendas dos verbos HTTP

- GET => Buscar uma informação
- POST => Inserir uma informação
- PUT => Alterar uma informação
- PATCH => Alterar uma informação específica
- DELETE => Deleta uma informação

### 🎲 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 📌 Como rodar o Projeto

```bash
    # 1º Clonar o repositório
    $ git clone https://github.com/arkanael/FinAPI

    # 2º Entrar no diretório
    $ cd FinApi

    # 3º Instalar as dependências
    $ yarn install

    # 4º Iniciar o projeto
    $ yarn start
```

### 🪂 Comandos utilizados no desenvolvimento da aplicação:

- yarn add express
- yarn add nodemon -D
- yarn add uuid

### 🚀 Meus Contatos

<h4>LinkedIn: <a href="https://www.linkedin.com/in/lbandeira/">www.linkedin.com/in/lbandeira/</a></h4>
<h4>Facebook: <a href="https://www.facebook.com/luiz.guilherme.58367/">https://www.facebook.com/luiz.guilherme.58367/</a></h4>
<h4>E-mail: <a href="mailto://arkanael@gmailcom/">arkanael@gmail.com</a></h4>
<h4>Currículo: <a href="https://arkanael.github.io/curriculo/">https://arkanael.github.io/curriculo/</a></h4>
<h4 align=center>Desenvolvido por Luiz Guilherme Bandeira</h4>
