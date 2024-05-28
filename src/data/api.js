import axios from "axios";

//TODO: Ruta hardcodeada
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
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

export const postProducts = async body => {
  const formData = new FormData()
  Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value)
  })
  const resp = await axiosInstance.post("/products", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  return resp.data;
}

//PARA NUESTRO CARRITO
export const postCart = async body => {
  const resp = await axiosInstance.post("/cart", { items: body });
  return resp.data;
};

export const editCart = async (id, body) => {
  const resp = await axiosInstance.put(`/cart/edit/${id}`, { items: body });
  return resp.data;
};

export const getCart = async id => {
  const resp = await axiosInstance.get(`/cart/get/${id}`);
  return resp.data;
};

//CHECKOUT
export const postPreferenceMP = async body => {
  const resp = await axiosInstance.post(`checkout`, body)
  return resp.data;
} 