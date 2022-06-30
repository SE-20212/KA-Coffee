import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    phone_number:{type:String,required:true},
    rank:{type:String,required:true},
    point:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String}
})

export default mongoose.model("User",userSchema)