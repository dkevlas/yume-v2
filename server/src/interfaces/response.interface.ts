export interface ApiResponse<T> {
    success: boolean,
    message: string,
    error?: string,
    lenght?: number,
    data?: T
}