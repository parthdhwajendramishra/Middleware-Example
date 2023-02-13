const express = require('express');
const app=express();

const checkUrl=function(req,res,next)
{
    console.warn("curent route is ",req.originalUrl);
    next();
}

app.use(checkUrl);

app.get('/',function(req,res){
    res.send("This is Home page")
});

app.get('/login',function(req,res){
    res.send("This is login page")
});

app.get('/about',function(req,res){
    res.send("This is about page")
});


app.listen(4000,()=>console.log("Server running at port 4000"));