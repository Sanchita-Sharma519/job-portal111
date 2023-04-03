const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { allUsers } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/auth');


router.get('/allusers',isAuthenticated,allUsers);

 
=======
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


router.get('/allusers',isAuthenticated,isAdmin,allUsers);
router.get('/user/:id',isAuthenticated,singleUser);
router.put('/user/edit/:id',isAuthenticated,editUser);
router.delete('/admin/user/delete/:id',isAuthenticated,isAdmin,deleteUser);
>>>>>>> 5c35ebd38254cb6625c411af16c2180105ea8256

module.exports = router;