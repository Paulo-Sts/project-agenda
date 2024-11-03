import databaseContecction from '../../config/database.js'

export const listaContatos = async (req, res) => {
    try {
        const [rows] = await databaseContecction.query('SELECT * FROM contatos')
        res.json(rows)
    } catch (error) {
        console.error('Erro ao listar contatos:', error)
        res.status(500).json({ error: 'Erro ao listar contatos' })
    }
}

export const criaContato = async (req, res) => {
    const { nome, telefone } = req.body
    try {
      const [result] = await databaseContecction.query('INSERT INTO contatos (nome, telefone) VALUES (?, ?)', [nome, telefone])
      const novoContato = { id: result.insertId, nome, telefone }
      res.status(201).json(novoContato)
    } catch (error) {
      console.error('Erro ao criar contato:', error)
      res.status(500).json({ error: 'Erro ao criar contato' })
    }
}

export const alteraContato = async (req, res) => {
    const { id } = req.params
    const { nome, telefone } = req.body
    
    try {
        const [result] = await databaseContecction.query('UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id])
        
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Contato não encontrado' })
        }
        res.json({ id, nome, telefone })

    } catch (error) {

        console.error('Erro ao atualizar contato:', error)
        res.status(500).json({ error: 'Erro ao atualizar contato' })

    }
}

export const apagaContato = async (req, res) => {
    const { id } = req.params
    
    try {
      const [result] = await databaseContecction.query('DELETE FROM contatos WHERE id = ?', [id])
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Contato não encontrado' })
      }
    res.status(204).send(); 
  } catch (error) {

    console.error('Erro ao remover contato:', error)
    res.status(500).json({ error: 'Erro ao remover contato' })
  }
}