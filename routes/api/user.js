const { Router } = require('express');
const User = require('../../controllers/UserController');

const router = Router();
// Router.get('/', [hasRole('USER_ROLE', 'ADMIN_ROLE')], userGet )
router.get('/' ,User.getUser() )