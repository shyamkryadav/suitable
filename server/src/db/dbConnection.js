
const mongoose = require('mongoose'); // import mongoose 
const dbConnect = async() => {
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/suitable');  // create a dateabase name suitable 
        if(res){
            console.log("connected to mongodb")  
        }
    }catch(err){
        console.log(err)
    }
}


module.exports = dbConnect   //  expoth this function that helps to excess to another files