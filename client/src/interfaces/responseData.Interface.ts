export interface TypeData {
    _id: string,
    title: string,
    description: string,
    category: string,
    subcategory: string,
    stock: number,
    price: number,
    brand: string,
    thumbnail: string,
    images: string[],
    createdAt: string,
    updatedAt: string
}

export interface ResponseData {
    success: boolean,
    message: string,
    countDocuments?: number,
    data?: TypeData[]
}