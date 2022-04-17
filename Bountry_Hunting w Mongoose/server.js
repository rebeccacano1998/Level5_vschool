const express=require("express")
const app=express()
const morgan = require('morgan')
const mongoose=require('mongoose')


app.use(express.json())//looks for request bdoy and turns it into req.body
app.use(morgan('dev'))//logs request to console

//connect to db
mongoose.connect("mongodb://localhost:27017/bounty", () => console.log('connected to database'))

//routes
app.use("/bounty",require("./routes/bountyRouter.js"))

//errorHandler
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg:err.message})


})

app.listen(9000,()=>{
    console.log("The server is running Port 9000")
})