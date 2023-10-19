import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import TransactionModel from './models/transaction.js';
const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/test',(req,res)=>{
    res.json({body:"test ok"})
})

app.post("/api/transaction",async(req,res)=>{
    const {name,description,datetime,price} = req.body;
    const transaction = await TransactionModel.create({name,description,datetime,price})

    res.json(transaction)
})
app.get("/api/transactions",async(req,res)=>{
    const transaction = await TransactionModel.find({});
    res.json(transaction)
})
app.listen(4000,async()=>{
    console.log("running on port 4000")
    try{
        await mongoose.connect('mongodb+srv://saifmalik7979:saif@cluster0.xckzulw.mongodb.net/?retryWrites=true&w=majority')
        console.log("datbase connected")
    }
    catch(err){
        console.log("error while connecting to database")
        console.log(err)
    }
})