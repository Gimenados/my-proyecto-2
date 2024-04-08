import { useState } from "react";

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => setValues(initialValue)

    return {
        values,
        handleInputChange,
        resetForm
    }
}

