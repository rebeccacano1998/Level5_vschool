const mongoose=require('mongoose')
const Schema=mongoose.Schema

//inventory blueprint
const bountySchema=new Schema({
    title:{
        type:String,
        required:true,
       },
       
    description:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Bounty",bountySchema)