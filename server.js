const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Requisição recebida!");
});

app.get('/home', (req, res) => {
    res.send("Home Page!");
});


app.get('/me', (req, res) => {
    console.log(req.query);
    res.send(`Meu nome é ${req.query.nome}, Moro em ${req.query.cidade}`);
});

app.listen(1234, () => {
    console.log("Servidor iniciado na porta 1234");
});