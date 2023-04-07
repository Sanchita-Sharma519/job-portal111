const express = require('express');
const {createJobType, allJobType,updateJobType,deleteJobType} = require('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/type/create',isAuthenticated,createJobType);
router.get('/type/jobs', allJobType);
router.put('/type/update/:type_id',isAuthenticated,isAdmin, updateJobType);
router.delete('/type/delete/:type_id',isAuthenticated,isAdmin, deleteJobType);

module.exports = router;