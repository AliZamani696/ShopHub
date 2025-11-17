const express = require("express");
const AdminRoute = express.Router();

AdminRoute.get("/Dashboard",(req,res)=>{
        res.render("AdminDashboard")
})


module.exports = AdminRoute
