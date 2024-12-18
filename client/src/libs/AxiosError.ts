import axios from "axios"

export const AxiosError = (err: any) => {
    if(err instanceof axios.AxiosError){
        if(err.response){
            return {
                errorResponse: err
            }
        }
        if(err.request){
            return {
                errorRequest: err
            }
        }
    } else{
        return {
            errorDesconocido: err
        }
    }
}