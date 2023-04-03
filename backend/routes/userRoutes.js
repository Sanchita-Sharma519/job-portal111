const express = require('express');
const router = express.Router();
const { allUsers } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


router.get('/allusers',isAuthenticated,isAdmin,allUsers);



module.exports = router;