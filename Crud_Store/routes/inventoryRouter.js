const express=require("express")
const inventoryRouter=express.Router()
const Inventory=require('../models/inventory.js')

//getAll
 inventoryRouter.get("/",(req,res,next)=>{
    Inventory.find((err,inventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })

 })


 inventoryRouter.post("/",(req,res,next)=>{
     const newInventory = new Inventory(req.body)
        newInventory.save((err,savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })

 })
 

 inventoryRouter.delete("/:invetoryId",(req,res,next)=>{
     Inventory.findOneAndDelete({_id:req.params.invetoryId},(err,deletedItem)=>{
         if(err){
             res.status(500)
             return next(err)
         }

         return res.status(200).send(`Successfully deleted item ${deletedItem.title} from database`)
    })
 })

 inventoryRouter.put("/:invetoryId",(req,res,next)=>{
     Inventory.findByIdAndUpdate(
        {_id:req.params.invetoryId}, //find this one to update
        req.body, //update the object with this data
        {new:true}, //send back updated version
        (err,updatedInventory)=>{
            if(err){
                res.status(500)
                return next(err)
                 }
            return res.status(201).send(updatedInventory)

        })
    })

 module.exports=inventoryRouter