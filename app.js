const express = require('express')
const app = express() 
app.get('/',(req,res)=>{
    res.send("welcometo the home page")
});
const port1=process.env.port||300
server.listen(port1,()=>{
console.log("started")
}) 
