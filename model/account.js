import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    email: {
        type: String,
        requiere: true
    },
    password: {
        type: String,
        requiere: true
    }
})

export default mongoose.model('Account',accountSchema);