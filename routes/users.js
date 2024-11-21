var express = require('express');
const mc=require('../controllar/workoutController')
var router = express.Router();

router.post('/createdata1',mc.createdata1 );
router.get('/showdata1',mc.showdata1 );

module.exports = router;
