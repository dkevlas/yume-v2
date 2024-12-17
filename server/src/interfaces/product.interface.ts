export interface ProductModel {
    title: string,
    description: string,
    category?: string,
    subcategory?: string,
    stock?: number,
    price: number,
    discountPercentage?: number,
    brand?: string,
    thumbnail: string,
    images: string[],
    createdAt?: Date
}