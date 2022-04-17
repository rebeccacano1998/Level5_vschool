const express=require("express")
const bountyRouter=express.Router()
const Bounty=require('../models/bounty.js')

//getAll
bountyRouter.get("/",(req,res,next)=>{
    Bounty.find((err,bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })

 })

 //post
 bountyRouter.post("/",(req,res,next)=>{
    const newBounty = new Bounty(req.body)
       newBounty.save((err,savedItem)=>{
       if(err){
           res.status(500)
           return next(err)
       }
       return res.status(201).send(savedItem)
   })

})


bountyRouter.delete("/:bountyId",(req,res,next)=>{
   Bounty.findOneAndDelete({_id:req.params.bountyId},(err,deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from database`)
   })
})

bountyRouter.put("/:bountyId",(req,res,next)=>{
   Bounty.findByIdAndUpdate(
       {_id:req.params.bountyId}, //find this one to update
       req.body, //update the object with this data
       {new:true}, //send back updated version
       (err,updatedBounty)=>{
           if(err){
               res.status(500)
               return next(err)
                }
           return res.status(201).send(updatedBounty)

       })
   })


 module.exports=bountyRouter