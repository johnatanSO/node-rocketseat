import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const app = express()

app.use(express.json())

const customers = []

// Middleware
function checkExistAccount(req, res, next){
  const {cpf} = req.headers

  if(!cpf) return

  const customer = customers.find(customer => customer.cpf === cpf)

  if(!customer){
    return res.status(400).json({
      error: "Nenhuma conta encontrada"
    })
  }

  req.customer = customer

  return next()
}

function getBalance(statement){
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit') return acc + operation.amount
    else if(operation.type === 'debit') return acc - operation.amount
  }, 0)

  return balance
}

app.post("/account", (req, res) => {
  const {cpf, name} = req.body

  const customerAlreadyExist = !!customers.find(customer => customer.cpf === cpf)

  if(customerAlreadyExist){
    return res.status(400).json({
      error: "CPF já foi cadastrado!"
    })
  }

  const newAccount = {
    id: uuidv4(),
    cpf,
    name,
    statement: []
  }
  customers.push(newAccount)
  return res.status(201).json(newAccount)
})

app.get("/statement", checkExistAccount, (req, res) => {
  const {customer} = req
  return res.json(customer.statement)
})

app.post("/deposit", checkExistAccount, (req, res) => {
  const {amount, desc} = req.body
  const {customer} = req

  const statementOperation = {
    desc: desc,
    amount: amount,
    created_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation)

  return res.status(201).json(statementOperation)
})

app.post("/withdraw", checkExistAccount, (req, res) => {
  const {amount} = req.body
  const {customer} = req

  const balance = getBalance(customer.statement)

  if(balance < amount){
    return res.status(400).json({error: "Saldo insuficiente!"})
  }
  
  const statementOperation = {
    amount: amount,
    created_at: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation)

  return res.status(201).json({
    message: "Operação concluída com sucesso!",
    item: statementOperation
  })
})

app.get("/statement/date", checkExistAccount, (req, res) => {
  const {customer} = req
  const {date} = req.params

  const dateFormated = new Date(date + " 00:00")

  const statement = customer.statement.filter(currentStatement => currentStatement.created_at.toDateString() === new Date(dateFormated).toDateString())

  return res.json(statement)
})


app.put("/account", checkExistAccount, async (req, res) => {
  const {name} = req.body
  const {customer} = req

  customer.name = name

  return req.status(201).json(customer)
})

app.get('/account', checkExistAccount, async (req,res) => {
  const {customer} = req

  return res.status(200).json(customer)
})

app.delete('account', checkExistAccount, async (req,res) => {
  const {customer} = req

  //customers = customers.filter(currentCustomer => currentCustomer.cpf !== customer.cpf)
  customer.splice(customer, 1)
  return res.status(204).send()
})

app.get("/balance", checkExistAccount, async (res,res) => {
  const {customer} = req
  const balance = getBalance(customer.statement)

  return res.status(200).json(balance)
})

app.listen(3333)