const express=require("express")
const app=express()

app.use(express.json())

//routes
app.use("/fruits",require("./routes/fruitsRouter.js"))

//server listen
app.listen(9000,()=>{
    console.log("The server is running on port 9000")
})