const express = require("express");

const app = express();
app.get("/",(req,res)=>{
        res.send("home")
})
const port = 9090;
app.listen(port,()=>{
        console.log("server is runing")
})
