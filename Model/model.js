const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }


})

//model

const User = mongoose.model('collection_01',userSchema)
module.exports=User