import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    phone_number:{type:String,required:true},
    rank:{type:String},
    point:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String}
})

export default mongoose.model("User",userSchema)