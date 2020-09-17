import { Schema, model } from "mongoose";

const roleShema = new Schema({
    neme: String
}, {
    versionKey: false
    });

export default model('Role', roleShema);