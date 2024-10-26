import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    axiosSecure.interceptors.response.use(res =>{
        return res
    },(err) =>{
        console.log(err.response);
        if (err.response?.status === 401 ||err.response?.status === 403) {
            logOut()
            .then().catch(err => {
                console.log(err.message);
            })
        }
    })
    return axiosSecure
};

export default useAxiosSecure;