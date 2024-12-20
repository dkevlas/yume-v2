export interface ServiceResponse<T = unknown> {
    success: boolean;
    message: string;
    countDocuments?: number;
    data?: T;
}