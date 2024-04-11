import React, { useState } from 'react';
import Text from '../components/Text';
import InputField from '../components/InputField';
import { useForm } from '../hooks/Form';
import { postMessage } from '../data/api';
import { validateForm, showErrors, showLoadedProduct } from '../hooks/Validation';

//Variable que contiene las propiedades que representan los campos del formulario
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

    //Envia el formulario 
    const handleSubmit = (event) => {
        event.preventDefault();
        const errores = validateForm(values);

        // Si no hay errores
        if (Object.keys(errores).length === 0) {
            // Si los estados se cargan bien 
            setLoadingForm(true);
            //Enviar los datos del formulario
            postMessage(values)
            //Promesa para respuesta del servidor
                .then(data => {
                    console.log(data);
                    // Mensaje de alerta que se cargo correctamente
                    showLoadedProduct();
                })
                //Si el formulario no se envia, solicitus por metodo Catch
                .catch(err => {
                    console.error(err);
                    alert('Error al cargar el producto');
                })
                //Finalmemte se restablece el formulario, haya sigo exitosa o no la solicitus
                .finally(() => {
                    setLoadingForm(false);
                    resetForm();
                });
        } else {
            showErrors(errores, inputProps);
        }
    };


    //Obheto que contiene la configurracion para cada campo del formulario
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
                {/* Object para tomar el objeto y iterar sobre cada uno de los inputs  */}
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

            {/* Grupo 5: delivery */}
            <fieldset>
            {Object.entries(inputProps).map(([key, props]) => (
                    key === 'delivery' ? (
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



