const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./Models/Users')
const cors = require('cors')
const app = express()
async function mongooseConnect() {
  await mongoose.connect(
    'mongodb+srv://rashadkhll:rashad918X.@cluster0.fmxu4.mongodb.net/?retryWrites=true&w=majority',
  )
}
mongooseConnect()
app.use(express.json())
app.use(cors())
//add
app.post('/users', async (req, res) => {
  const newUser = new UserModel(req.body)
  await newUser.save()
  res.status(201).send('User Created !')
})
//get all
app.get('/users', async (req, res) => {
  const prods = await UserModel.find()
  res.json(prods)
})
// get by id
app.get('/users/:id', async (req, res) => {
  const id = req.params.id
  const user = await UserModel.findById(id)
  res.status(200).json(user)
})
//update
app.patch('/users/:id', async (req, res) => {
  const id = req.params.id
  const user = await UserModel.findByIdAndUpdate(id, req.body)
  res.status(200).json(user)
})
//delete
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id
  await UserModel.findByIdAndDelete(id)
  const Users = await UserModel.find()
  res.status(200).send(Users)
})
app.listen(8080, () => {
  console.log('server running on 8080')
})
