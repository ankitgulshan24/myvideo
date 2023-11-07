// //connecting database in index file



// import mongoose from "mongoose";
// //import db name 
// import { DB_NAME } from "./constant";

// import { Express } from "express";
// const app= Express()

//method 1

// function connectDB(){}
// connectDB()

//method 2

/*
;(async()=>{
    try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error", ()=>{
            console.log("application not able to talk to database");
            throw error
         })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is litening on ${process.env.PORT}`);
        }) 

    }catch(error){
        console.log(error);
        throw err

    }
})()
*/

//the above code is just to show how databse is directly connected

// require ('dotenv').config({path: './env'})    this itself is enogh but disturb our code cositency

import dotenv from "dotenv"

dotenv.config({
    path: '/env'
})

import connectDB from "./database/db.js";
connectDB()