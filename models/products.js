import { ObjectId } from "mongojs";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        required: true
    }
})

export default mongoose.model('Products', productSchema)