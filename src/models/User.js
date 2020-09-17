import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    usernama:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        required: true,
        type: String
    },
    roles:[{
        ref:"Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps:true,
    versionKey: false
});

userSchema.static.encryptPassword = async (password)=> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    
}

userSchema.static.comparePassword = async (password, receivedPassword)=> {
    return await bcrypt.compare(password, receivedPassword);
}


export default model('User', userSchema);