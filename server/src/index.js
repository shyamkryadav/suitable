const express = require('express')
const app=express()

require('dotenv').config()
console.log(process)


app.get("/",(req,res)=>{
    res.send("shyam")

})



app.listen(3000,()=>{
    console.log("server is running ")
})

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log(process.env.PORT);
//     console.log("The YelpCamp Server Has Started!");
//  });