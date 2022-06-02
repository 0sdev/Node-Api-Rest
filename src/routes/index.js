const { Router } = require('express');
const router = Router();


const datos = require('../sample.json');
//console.log(datos);

router.get('/',(req,res) =>{
    res.json(datos);
});

module.exports = router;
