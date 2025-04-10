const express =  require('express');
const router = express.Router();

router.post('/add',(req, res) => {
    console.log(req.body);
    res.send('response from user add');
});
// : denotes url parameter
router.get('/getbyemail/:email',(req,res)=> {
    console.log(req.params.email)
    res.send('response from user getbyemail');
});

//getall
//getbyid
//update
//dalete

module.exports = router;