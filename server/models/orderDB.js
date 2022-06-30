import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    id:{type:String},
    customer: {
        name:{type:String,required:true},
        phone_number:{type:String,required:true},
        address: {type:String,required:true},
    },
    product: {
        name: {type:String,required:true},
        price: {type: Number,required:true},
        quantity: {type: Number,required:true}
    },
    status: {type:String,required:true},
    createdAt: {
        type: Date,
        default:new Date()
    }, 
    total: {type:Number,required:true},
})

export default mongoose.model("Order",orderSchema)