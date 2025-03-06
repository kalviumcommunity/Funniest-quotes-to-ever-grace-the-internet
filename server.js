const express = require("express");

const app = express();

app.get("/ping",(request,response)=>{
    try{
        response.status(200).send({msg:"Pong!"});
    }
    catch(error){
        console.log("Server is not connected",error);
        response.status(500).send({msg:"Error connecting to the server",error});
    }
})






app.listen(8000,()=>{
    console.log("Server connected successfully");
})