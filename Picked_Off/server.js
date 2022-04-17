const express=require("express")
const app=express()


app.use(express.json())



//routes
//app.use("/rentals",require("./routes/rentalsRouter.js"))

app.use("/rentals",(req,res,next)=>{
    console.log("Middleware was succesfully executed")
    next()
})

app.use("/rentals",(req,res,next)=>{
    req.body={title:"7964 Grover Drive, San Franciso, Ca"}
    next()
})

app.get("/rentals",(req,res,next)=>{
    console.log("Your Request was recieved")
    res.send(req.body)
})



//server.listen
app.listen(9000,()=>{
    console.log("This server is running on port 9000")
})