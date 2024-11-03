import express from 'express'
import { listaContatos, criaContato, alteraContato, apagaContato } from '../api/controllers/contatosController.js'

const router = express.Router()

router.get('/', listaContatos)
router.post('/', criaContato)
router.put('/:id', alteraContato)
router.get('/:id', apagaContato)

export default router