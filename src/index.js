// require('dotenv').config({path:'./env'})
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({path:'./env'})
const app=express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed",err);
})




// import express from "express";
// const app=express();
// (async()=>{

//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error connecting to database",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server listening on port ${process.env.PORT}`);
//         })
//         console.log("Database connected");
//     } catch (error) {
//         console.log("Error connecting to database",error);
//         throw error;
//     }
// })()