const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/api_authentication', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao banco de dados:'));
db.once('open', () => console.log('Conectado ao banco de dados'));

const jwtSecret = config.jwtSecret;

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
