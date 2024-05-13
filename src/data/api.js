import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/"
})

//Recibe las informacion en el componente.  Espera a que se resuelva la solicitud y devuelve los datos de respuesta.
// Envía el cuerpo del mensaje proporcionado como parámetro. Espera a que se resuelva la solicitud y almacena la respuesta en la variable resp.
export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

//Esta función toma un parámetro body que representa el cuerpo del mensaje a ser enviado
export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

// export const postArticles = async () => {
//     const resp = await axiosInstance.post("/articles", body)
// }