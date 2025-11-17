
const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
        productName :{
                type : String,
                required: [true, 'Product name is required'],
                trim: true,
                maxlength: [100, 'Product name cannot exceed 100 characters']
        },
        productCategory:{
                type: String,
                required: [true, 'Product category is required'],
                // enum: {
                //         values: ['electronics', 'home', 'fashion', 'toys', 'books', 'stationery'],
                //         message: 'Please select a valid category'
                // }
        },
        productPrice: {
                type: Number,
                required: [true, 'Product price is required'],
                min: [0, 'Price cannot be negative']
        },
        productStock:{
                type: Number,
                required: [true, 'Product stock is required'],
                min: [0, 'Stock cannot be negative'],
                default: 0
        },
        productDescription:{
                type: String,
                required: [true, 'Product description is required'],
                maxlength: [1000, 'Description cannot exceed 1000 characters']
        }

})
module.exports = mongoose.model('Product', ProductSchema);
