const express=require("express")
const app=express()


//middleware(for every request)
app.use(express.json())

//routes

//array
app.use("/todoList",require("./routes/todoList.js"))


//server listen
app.listen(9000,()=>{
    console.log("The server is running on Port 9000")
})