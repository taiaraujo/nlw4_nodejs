import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.send({mensagem : 'Hello World'})
})

app.post('/', (request, response) => {
    return response.json({
        mensagem : 'info recebida com sucesso'
    })
})

app.listen(3333, () => console.log("Server rodando..."))

