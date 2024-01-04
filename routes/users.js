const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  res.json(user);
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.json({ message: 'Usuario creado correctamente' });
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.save();
  res.json({ message: 'Usuario actualizado correctamente' });
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await User.destroy({ where: { id: userId } });
  res.json({ message: 'Usuario eliminado correctamente' });
});

module.exports = router;