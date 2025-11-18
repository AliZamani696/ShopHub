const express = require("express");
const Home = express.Router();

Home.get("/",(req,res)=>{
        res.render("Home")
})
Home.get("/About",(req,res)=>{
        res.render("About")
})
Home.get("/Contact",(req,res)=>{
        res.render("Contact")
})
module.exports = Home
