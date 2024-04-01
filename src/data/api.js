import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://660b0441ccda4cbc75dc4430.mockapi.io/api/"
})

//Recibe las informacion en el componente 
export const getArticles = async () => {
    const resp = await axiosInstance.get("/articles")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 