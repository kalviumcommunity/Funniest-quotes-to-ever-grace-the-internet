const express = require("express");

const app = express();

app.get("/ping",(req,res)=>{
    resizeBy.send("pong!");
})

app.listen(8080,()=>{
    try {
        console.log("Server connected sucessfully");
    } catch (error) {
        console.log(error)
    }
})