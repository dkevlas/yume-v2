import { model, Schema } from "mongoose";
import { ProductModel } from "../interfaces/product.interface";

const ProductSchema = new Schema<ProductModel>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'sin-categoría'
    },
    subcategory: {
        type: String,
        default: 'sin-subcategoría'
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        default: 'No especificado'
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

export default model('Product', ProductSchema)