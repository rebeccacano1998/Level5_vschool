const express=require("express")
const app=express()
//const uuid=require("uuid/v4")

//middleware(for every request)
app.use(express.json())

//routes

//array
app.use("/hitlist",require("./routes/hitlistRouter.js"))


//server listen
app.listen(9000,()=>{
    console.log("The server is running on Port 9000")
})