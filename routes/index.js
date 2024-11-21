var express = require('express');
var hc=require('../controllar/user')
const router = express.Router();


/* GET home page. */
router.post('/createdata',hc.createdata );
router.get('/showdata',hc.showdata );
router.delete('/deletedata/:id',hc.deletedata );

module.exports = router;
