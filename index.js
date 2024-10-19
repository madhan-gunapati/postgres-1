const express = require('express');
const app = express(); 

const {Client} = require('pg');

const client = new Client({
    user:'postgres',
    host:'localhost',
    password:'1234',
    port:5432,
    
})

app.use('/', (req, res)=>{
    res.send('Hi From The APP')
})
app.listen(3000, ()=>{
    console.log('App is listening at Port 3000')
})