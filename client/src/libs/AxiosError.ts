import axios from "axios"

export const AxiosError = (err: unknown) => {
    if(err instanceof axios.AxiosError){
        if(err.response){
            console.log(err.request.data)
            return err.response.data
        }
        if(err.request){
            console.log(err.request)
            return err.request
        }
    } else{
        console.log(err)
        return {
            errorDesconocido: err
        }
    }
}