import express from 'express';
import data from './Data.js';

const app = express();

app.get('/api/product' , (req,res)=>{
    res.send(data.Products)
})

app.get('/',(req,res)=>{
    res.send('server is ready')
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})