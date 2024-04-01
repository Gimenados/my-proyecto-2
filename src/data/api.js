import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://65f8d55edf15145246101010.mockapi.io/api/v1"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 