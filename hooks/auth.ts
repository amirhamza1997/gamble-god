import { post } from "@/utils/axios"
import { useMutation } from "react-query"

export const useLogin = () => {
    return useMutation({
        mutationFn: (data:any) => post("/auth/login", data),
        onSuccess: (res) => {
            console.log(res);      
        },
        onError: (err) => {
            console.log(err)
        }
    })
}