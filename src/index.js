const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

app.get("/", (req, res) => {
  return res.json({ message: "Running" });
});

app.get("/version", (request, response) => {
  return response.json({ Version: "1.0" });
});

app.get("/statement", (request, response) => {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(404).json({ error: "Customer not found!" });
  }

  return response.json(customer.statement);
});

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customersAlreadyExist = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customersAlreadyExist) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333, console.log("Server is runnning"));
