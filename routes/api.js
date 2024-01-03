const userRoutes = require('./api/user');
//const authRoutes = require('./api/auth')
const { Router } = require('express') 
//const { validateJWT } = require('../middlewares/')

const router = Router();

// router.use('/users', [validateJWT], userRoutes);
router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

module.exports = router;