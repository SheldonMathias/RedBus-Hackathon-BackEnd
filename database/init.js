const mongoose = require('mongoose');


const run = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('Database successfully connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports= {run}