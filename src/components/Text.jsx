import { createElement } from 'react'

//Text renderiza un elemento de texto en función de la especificación proporcionada en las props
//RenderAs = Elemento, Content = contenido, ContentsProps= Las propiedades que se deben aplicar en los eleemntos 
function Text({ renderAs, content, componentsProps }) {
    //Devuelve el resultado de la funcion createElement
    return (
        createElement(renderAs, componentsProps, content)
    )
}

export default Text