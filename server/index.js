import express from 'express';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/test',(req,res)=>{
    res.json({body:"test ok"})
})

app.post("/api/transaction",(req,res)=>{
    res.json(req.body)
})

app.listen(4000,()=>console.log("running on port 4000"))