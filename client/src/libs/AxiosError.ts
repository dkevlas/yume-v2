import axios from "axios"

export const AxiosError = (err: unknown) => {
    if(err instanceof axios.AxiosError){
        if(err.response){
            return err.response.data
        }
        if(err.request){
            return err.request
        }
    } else{
        return {
            errorDesconocido: err
        }
    }
}