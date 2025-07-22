const express = require("express")
const app = express()
const cors =require("cors")

app.use(cors())
const username = "Rajesh123@gmail.com"
const password = 123456789
app.get("/login",(req,res)=>{

if(req.query.Username ==username && req.query.Password){

    res.send(true)
}else{
    res.send(false)
}


})



app.listen(5000,()=>{
    console.log("Server Started....");
    
})