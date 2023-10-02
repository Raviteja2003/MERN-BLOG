import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        validate : {
            validator : validator.isEmail,
            message: "Not a valid email",
        },
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role: {
        type: String,
        default: "user",
      },
},
)

const userModel = mongoose.model("details",userSchema);

 export default userModel;