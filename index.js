const bodyParser = require('body-parser')
const express = require('express')
const mongoose=require('mongoose')
const router=require('./Route/Route')
const app = express()
const port = 5000


app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router)
app.use('/',(req,res)=>{
res.send('404')
})



mongoose.connect('mongodb+srv://Tapan:Tapan123@cluster0.sn1se5u.mongodb.net/Tapan')
.then(()=>{console.log("mongodb connected");})
.catch((err)=>{console.log(err);})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))