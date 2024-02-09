const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster1.nqvqztn.mongodb.net?retryWrites=true&writeConcern=majority");

const app=express();

app.listen(7001,()=>{
    console.log("hey server is up and alive");
});


app.get("/gfg/test",(req,res)=>{
    const id = req.query.ids
    console.log(id)
    res.send(`<html><h1>Hello Worlds</h1></html>`)
})

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));


module.exports = app;