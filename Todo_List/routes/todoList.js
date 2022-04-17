const { v4: uuidv4 } = require('uuid')
const express=require('express')
const todoListRouter=express.Router()

const todoList=[
    {
        name: "Take care of the dogs",
        description: "Feed and walk dogs",
        _id:uuidv4()
    },
    {
        name: "Prepare Dinner",
        description: "Buy spaghetti and sauce",
        _id:uuidv4()
    },
    {
        name: "Go to Gym",
        description: "Do cardio today",
        _id:uuidv4()
    }


]

//Get All

todoListRouter.get("/",(req,res)=>{
    res.send(todoList)

})

todoListRouter.post("/",(req,res)=>{
    const newTodoList=req.body
    newTodoList._id=uuidv4()
    todoList.push(newTodoList)
    res.send(`${newTodoList} has been added succesfully`)
})

todoListRouter.delete("/:todoListId",(req,res)=>{
    const todoListId=req.params.todoListId
    const todoListIndex=todoList.findIndex(todoList=>todoList._id===todoListId)
    todoList.splice(todoList,1)
    res.send('Item was deleted succesfully')
})

todoListRouter.put("/:todoListId",(req,res)=>{
    const todoListId=req.params.todoListId
    const todoListIndex=todoList.findIndex(todoList=>todoList._id===todoListId)
    const updatedTodoList=Object.assign(todoList[todoListIndex],req.body)
    res.send(updatedTodoList)
})


module.exports= todoListRouter