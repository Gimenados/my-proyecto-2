import { useState } from "react";

// Almacena los estados del formulario 
export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    // Manejar los cambios de los inputs del formulario 
    const handleInputChange = e => {
        if (e.target.type === "file") {
            const file = e.target.files[0];
            const imgUrl = URL.createObjectURL(file);

            setValues({
                ...values,
                [e.target.name]: file,
                imgUrl: imgUrl
            });
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            });
        }
    };

    // Restablecer los valores del formulario a su estado inicial
    const resetForm = () => setValues(initialValue);

    return {
        values,
        handleInputChange,
        resetForm
    };
};
