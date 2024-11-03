import express from 'express'
import cors from 'cors'
import contatosRouter from './routes/contatos.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/contatos',contatosRouter)

export default app