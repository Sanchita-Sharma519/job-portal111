const express = require('express');
const {createJobType, allJobType} = require('../controllers/jobsTypeController');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.post('/type/create',isAuthenticated,createJobType);
router.get('/type/jobs', allJobType);


module.exports = router;