const { v4: uuidv4 } = require('uuid')
const express=require('express')
const hitlistRouter=express.Router()

const hitlist=[
{title:"KillFace" , _id:uuidv4()},
{title:"Ghost" , _id:uuidv4()},
{title:"MadMaxx" , _id:uuidv4()}
]

//GET ALL
hitlistRouter.get("/",(req,res)=>{
    res.send(hitlist)

})

//body
//raw
//json
hitlistRouter.post("/",(req,res)=>{
    //store new member in the req.body
    const newListMember=req.body
    //assign an id
    newListMember._id=uuidv4()
    //push member into array
    hitlist.push(newListMember)
    //confirmation message
    res.send(`${newListMember} has been successfully added to the database`)
})

hitlistRouter.delete("/:hitlistId",(req,res)=>{
    const hitlistId=req.params.hitlistId
    const hitlistIndex=hitlist.findIndex(hitlist=> hitlist._id === hitlistId)
    hitlist.splice(hitlist,1)
    res.send("Member was succesfully deleted")
})

hitlistRouter.put("/:hitlistId",(req,res)=>{
    const hitlistId=req.params.hitlistId
    const hitlistIndex=hitlist.findIndex(hitlist=> hitlist._id === hitlistId)
    const updatedHitlist=Object.assign(hitlist[hitlistIndex],req.body)
    res.send(updatedHitlist)
})


module.exports= hitlistRouter