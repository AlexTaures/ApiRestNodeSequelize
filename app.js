require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users');
// const path = require('path');

const app = express();

// Importar rutas

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

// Instalar rutas
app.use('/users', usersRouter);
