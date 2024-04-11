import { useState } from "react";

//Almacena los estados del formulario 
export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    //Manejar los cambios de los inputs del formulario 
    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    //Restablecer los valores del formulario a su estado inicial
    const resetForm = () => setValues(initialValue)

    return {
        values,
        handleInputChange,
        resetForm
    }
}

