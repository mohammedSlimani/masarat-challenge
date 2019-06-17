const router = require('express').Router();


router.get('/',(req,res)=>{
    res.sendFile(process.cwd() + '/views/index.html');
})

//
router.get('/api/easy',(req,res)=>{
    res.send('sending an easy problem');
})

router.get('/api/hard',(req,res)=>{
    res.send('sending a hard problem');
})


module.exports = router;