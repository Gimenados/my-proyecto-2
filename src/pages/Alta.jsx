import React, { useState } from 'react';
import Text from '../components/Text';
import InputField from '../components/InputField';
import { useForm } from '../hooks/Form';
import { postMessage } from '../data/api';
import { validateForm, showErrors, showLoadedProduct } from '../hooks/Validation';

const initialValue = {
    name: '',
    price: '',
    stock: '',
    category: '',
    brand: '',
    ageFrom: '',
    ageTo: '',
    shortDesc: '',
    longDesc: '',
    img: '',
    delivery: '',
};

function Alta() {
    const { values, handleInputChange, resetForm } = useForm(initialValue);
    const [loadingForm, setLoadingForm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const errores = validateForm(values);

        if (Object.keys(errores).length === 0) {
            setLoadingForm(true);
            postMessage(values)
                .then(data => {
                    console.log(data);
                    showLoadedProduct();
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al cargar el producto');
                })
                .finally(() => {
                    setLoadingForm(false);
                    resetForm();
                });
        } else {
            showErrors(errores, inputProps);
        }
    };

    const inputProps = {
        name: {
            inputLabel: "Nombre",
        },
        price: {
            inputLabel: "Precio",
            inputType: "number"
        },
        stock: {
            inputLabel: "Stock",
            inputType: "number"
        },
        category: {
            inputLabel: "Categoría",
        },
        brand: {
            inputLabel: "Marca",
        },
        ageFrom: {
            inputLabel: "Edad desde",
            inputType: "number"
        },
        ageTo: {
            inputLabel: "Edad hasta",
            inputType: "number"
        },
        shortDesc: {
            inputLabel: "Descripción corta",
        },
        longDesc: {
            inputLabel: "Descripción larga",
            inputType: "textarea"
        },
        img: {
            inputLabel: "Foto",
            inputType: "file"
        },
        delivery: {
            inputLabel: "Envío sin cargo",
            inputType: "checkbox"
        },
    };

    return (
        <form className="form_container_high" id="uploadForm" onSubmit={handleSubmit}>
            <Text renderAs='h2' content='Formulario de Alta' />

            {/* Grupo 1: Información general */}
            <fieldset>
                <legend>Información general</legend>
                {Object.entries(inputProps).map(([key, props]) => (
                    key === 'name' || key === 'price' || key === 'stock' || key === 'brand' || key === 'category' ? (
                        <InputField
                            key={key}
                            id={key}
                            label={props.inputLabel}
                            type={props.inputType}
                            value={values[key]}
                            onChange={handleInputChange}
                        />
                    ) : null
                ))}
            </fieldset>

            {/* Grupo 2: Descripción */}
            <fieldset>
                <legend>Descripción</legend>
                {Object.entries(inputProps).map(([key, props]) => (
                    key === 'shortDesc' || key === 'longDesc' ? (
                        <InputField
                            key={key}
                            id={key}
                            label={props.inputLabel}
                            type={props.inputType}
                            value={values[key]}
                            onChange={handleInputChange}
                        />
                    ) : null
                ))}
            </fieldset>

            {/* Grupo 3: Información adicional */}
            <fieldset>
                <legend>Información Adicional</legend>
                {Object.entries(inputProps).map(([key, props]) => (
                    key === 'freeDeliver' || key === 'ageFrom' || key === 'ageTo' ? (
                        <InputField
                            key={key}
                            id={key}
                            label={props.inputLabel}
                            type={props.inputType}
                            value={values[key]}
                            onChange={handleInputChange}
                        />
                    ) : null
                ))}
            </fieldset>

          {/* Grupo 4: Foto */}
           <fieldset>
                <legend>Foto</legend>
                {Object.entries(inputProps).map(([key, props]) => (
                    key === 'img' ? (
                        <InputField
                           key={key}
                           id={key}
                           label={props.inputLabel}
                           type={props.inputType}
                           value={values[key]}
                           onChange={handleInputChange}
                        />
                    ) : null
                 ))}
            </fieldset>


            <div className="button_container">
                <button type="submit" className="btn btn-primary">Guardar producto</button>
            </div>
        </form>
    );
}

export default Alta;



