const express = require('express')
const app = express()
const cors = require('cors')

const {run} = require('./database/init')
run()


app.use(cors())

app.use(express.json())


app.get('/api',require('./routers/route'))


app.listen(4000,()=>{
    console.log('Port live on 4000')
})