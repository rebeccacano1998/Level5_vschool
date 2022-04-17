const express=require("express")
const fitnessRouter=express.Router()
const Fitness=require('../models/fitness.js')


//get request
fitnessRouter.get("/",(req,res,next)=>{
    Fitness.find((err,fitness)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(fitness)
    })
})

//post request
fitnessRouter.post("/",(req,res,next)=>{
    const newInput= new Fitness(req.body)
    newInput.save((err,savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(201).send(savedItem)
    }) 
})


//delete request
fitnessRouter.delete("/:fitnessId",(req,res,next)=>{
    Fitness.findOneAndDelete({id:req.params.fitnessId},(err,deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Succesfully deleted item ${deletedItem} from the database`)
    })
})


//put request
fitnessRouter.put("/:fitnessId",(req,res,next)=>{
    Fitness.findByIdAndUpdate(
        {_id:req.params.fitnessId},//find one to update
        req.body, //update the object with this data
        {new:true},//send back updated version
        (err,updatedInfo)=>{
            if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(updatedInfo)
    
    })
})








module.exports=fitnessRouter