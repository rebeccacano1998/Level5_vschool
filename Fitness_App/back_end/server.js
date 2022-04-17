const express=require("express")
const app=express()
const morgan = require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')

app.use(express.json())//looks for request bdoy and turns it into req.body
app.use(morgan('dev'))//logs request to console
app.use(cors()) //helps connect the front and the back end

//connect to db
mongoose.connect("mongodb+srv://rebeccacano1998:te9RUabDhww6_gH@cluster1.zobtx.mongodb.net/fitness_db?retryWrites=true&w=majority", () => console.log('connected to database'))


//routes
app.use("/fitness",require("./routes/fitnessRouter.js"))


//errorHandler
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg:err.message})
})

app.listen(9000,()=>{
    console.log("The server is running Port 9000")
})