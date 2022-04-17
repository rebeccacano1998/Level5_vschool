const mongoose=require('mongoose')
const Schema=mongoose.Schema

//inventory blueprint
const fitnessSchema=new Schema({
    workout:{
        type:String,
        required:true,
       },
       
    date:{
        type:String,
        required:true,
    },
    calories:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("Fitness",fitnessSchema)