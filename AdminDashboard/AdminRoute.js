const express = require("express");
const AdminRoute = express.Router();

AdminRoute.get("/",(req,res)=>{
        res.render("AdminDashboard")
})


module.exports = AdminRoute
