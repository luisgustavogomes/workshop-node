const express = require('express');
const app = express();
const fs = require('fs');

const middleware = require('./log.middleware');

app.use(middleware);

app.get('/', (req, res) => {
    fs.readFile('./views/index.html', 'UTf-8', (err, content) => {
        if (err) res.status(500).send(content);

        res.status(200).send(content);
    });
});

app.get('/contato', (req, res) => {
    fs.readFile('./views/contato.html', 'UTf-8', (err, content) => {
        if (err) res.status(500).send(content);

        res.status(200).send(content);
    });
});

app.get('/sobre', (req, res) => {
    fs.readFile('./views/sobre.html', 'UTf-8', (err, content) => {
        if (err) res.status(500).send(content);

        res.status(200).send(content);
    });
});

app.listen(3001, () => {
    console.log('Você está rodando');
});