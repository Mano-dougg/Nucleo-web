import express from 'express'


const Rotas = express.Router()

Rotas.post('/', (req, res) => {
    res.send('Cria novo item')
})

Rotas.get('/', (req, res) => {
    res.send('Lê todos os itens')
})

Rotas.get('/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Lê o item ${id}`)
})

Rotas.get('/:nome', (req, res) => {
    const nome: number = +req.params.nome
    res.send(`Lê o item ${nome}`)
})

Rotas.put('/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o item ${id}`)
})

Rotas.delete('/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o item ${id}`)
})

export default Rotas