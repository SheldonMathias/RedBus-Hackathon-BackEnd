const express = require('express');
const router = express.Router()
const {model} = require('../database/schema')

router.get('/',async (req,res)=>{
    res.json({
        'hi':'working'
    })
    

    // try {

    //     await model.find({}).then((data)=>{
    //         console.log(data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }
    // catch{
    //     console.log("error!");

    // }


    
})


router.post('/',(req,res)=>{
    console.log(req)
    
})





module.exports = router;
