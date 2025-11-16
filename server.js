const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true})
)
let products = [
        //pname sort is product name
        {
                id:1,
                Pname : "phone"
        },
        {
                id:2,
                Pname : "tv"
        }
]

app.get("/",(req,res)=>{
        res.send("home");
});
app.get("/products",(req,res)=>{
        res.json(products);
})
app.get("/FindProduct",(req,res)=>{
        let product = products.find(p=>{
                if(p.id == req.body.id){
                        return p;
                };
        });
        console.log(product);
});
app.put("/EditProduct",(req,res)=>{
        products = products.map(p=>{
                if(p.id == req.body.id){
                        return p = req.body
                }
                return p
        })
        console.log(products)
});
app.delete("/DeleteProduct",(req,res)=>{
        products = products.filter(p=>{
                return(p.id != req.body.id)
        })
        console.log(products)
});
app.post("/AddProduct",(req,res)=>{
        products.push(req.body);
        console.log(products)
});

const port = 9080
app.listen(port,()=>{
        console.log("server is runing")
})
