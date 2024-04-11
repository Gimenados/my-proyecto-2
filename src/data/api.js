import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://660b0441ccda4cbc75dc4430.mockapi.io/api/"
})

//Recibe las informacion en el componente.  Espera a que se resuelva la solicitud y devuelve los datos de respuesta.
// Envía el cuerpo del mensaje proporcionado como parámetro. Espera a que se resuelva la solicitud y almacena la respuesta en la variable resp.
export const getArticles = async () => {
    const resp = await axiosInstance.get("/articles")
    return resp.data;
}


//Esta función toma un parámetro body que representa el cuerpo del mensaje a ser enviado
export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 