const express = require('express')
const app=express()

require('dotenv').config()
const PORT = process.env.PORT || 8080;
console.log(PORT)




app.get("/",(req,res)=>{
    res.send("shyam")

})



app.listen(PORT,()=>{
    console.log(`"server is running ${PORT} "`)
})

