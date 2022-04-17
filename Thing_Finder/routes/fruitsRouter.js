const {v4 : uuidv4}=require('uuid')
const express=require('express')
const fruitsRouter=express.Router()

const fruits=
 [
    {
        name: "banana",
        type: "berry",
        price: 200,
        _id:uuidv4()
    },{
        name: "apple",
        type: "pome",
        price: 2500,
        _id:uuidv4()
    },{
        name: "mango",
        type: "drupe",
        price: 1000,
        _id:uuidv4()
    },{
        name: "peach",
        type: "drupe",
        price: 1500,
        _id:uuidv4()
    },{
        name: "plum",
        type: "drupe",
        price: 800,
        _id:uuidv4()
    }
]

//get all
fruitsRouter.get("/",(req,res)=>{
    res.send(fruits)
})

//get all DRUPE fruits
fruitsRouter.get("/search/type", (req,res)=>{
    const type=req.query.type
    const filteredFruits=fruits.filter(fruits=>fruits.type===type)
    res.send(filteredFruits)
})




module.exports=fruitsRouter