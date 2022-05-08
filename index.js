import express from "express";
import bodyParser from "body-parser"
import userRoutes from "./routes/users.js"
import accountRouters from "./routes/account.js"
import mongoose from "mongoose";
import config from "dotenv/config";
import cors from "cors"

const app = express();
const PORT = process.env.APP_PORT;

//Middleware
app.use(bodyParser.json());
app.use(cors())

//Routes
app.use("/users",userRoutes);
app.use("/account",accountRouters);


//Home screen
app.get('/', (req, res) => {
    res.send('Welcome to Chat API With NodeJS');
});

// Listening Port and Database Connection
app.listen(PORT, ()=>  { 
    console.log(`Server Running on port: http://localhost:${PORT} `) 
    mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected to DB!");
   });
});