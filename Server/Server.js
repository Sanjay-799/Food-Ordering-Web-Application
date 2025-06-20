

const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');

const app=express();
app.use(cors()); 
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sanjay@799',
    database:'store'
})

db.connect((err,result)=>{
    if(err){
        console.log('Error to connect DB',err)
        return
    }
    console.log('Database connected')

})




app.listen(3000,()=>{
    console.log('server is running')
})