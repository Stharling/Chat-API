import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requiere: true
    },
    email: {
        type: String,
        requiere: true
    },
    avatarName: {
        type: String,
        requiere: true
    },
    avatarColor: {
        type: String,
        requiere: true
    }
})

export default mongoose.model('User',userSchema);
