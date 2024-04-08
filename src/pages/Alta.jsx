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
            <Text renderAs='h2' content='Alta' />

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



// // Alta.jsx
// import React from 'react';
// import Form from '../hooks/Form'

// import Validation from './validacion'; // Asegúrate de importar el hook Validation desde el archivo correcto

// function Alta() {
//     const { errors, Validation } = Validation();

//     const { values, handleInputChange } = useForm({
//       name: '',
//       price: '',
//       stock: '',
//       brand: '',
//       category: '',
//       shortDesc: '',
//       longDesc: '',
//       freeDeliver: false,
//       ageFrom: '',
//       ageTo: '',
//       photo: null
//   });
  
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     const newErrors = validateField(name, value);
//     setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: newErrors[name]
//     }));
// };



//     return (
//       <form className="form_container_high" id="uploadForm" onSubmit={handleSubmit}>
//        <h2>Dar de alta un producto</h2>
  
//        <fieldset>
//            <legend>Informacion general</legend>
//            <label className='form-label'>Nombre</label>
//            <input 
//               type="text" 
//               className="form-control" 
//               id="name" 
//               name="name" 
//               required/>
  
//            <p id="nameError" className="input-msg-error"></p>
  
//            <label for="price" className="form-label">Precio</label>
//            <input 
//               type="number" 
//               className="form-control" 
//               id="price" 
//               name="price" 
//               required />
  
//                <p id="priceError" className="input-msg-error"></p>
  
//            <label for="stock" className="form-label label-required">Stock</label>
//            <input 
//                type="number" 
//                className="form-control" 
//                id="stock" 
//                name="stock"
//                required min="0" />
  
//                <p id="stockError" className="input-msg-error"></p>
  
//            <label for="brand" className="form-label label-required">Marca</label>
//            <input 
//                type="text" 
//                className="form-control" 
//                id="brand" 
//                name="brand" 
//                maxlength="20" />
  
//                <p id="brandError" className="input-msg-error"></p>
  
//            <label for="category" className="form-label label-required">Categoría</label>
//            <input 
//                type="text" 
//                className="form-control" 
//                id="category" 
//                name="category" 
//                required />
  
//                 <p id="categoryError" className="input-msg-error"></p>
//        </fieldset>
  
//        {/* <!-- Grupo 2: Descripción --> */}
  
//        <fieldset>
//            <legend>Descripción</legend>
//            <label for="shortDescription" class="form-label label-required">Descripción corta</label>
//            <textarea 
//                id="shortDescription"  
//                name="shortDescription" 
//                rows="4" 
//                required maxlength="120"></textarea>
            
//                  <p id="shortDescriptionError" class="input-msg-error"></p>
  
//            <label for="longDescription" class="form-label">Descripción larga</label>
//            <textarea 
//                id="longDescription" 
//                name="longDescription" 
//                rows="8"></textarea>
//        </fieldset>
  
//        {/* <!-- Grupo 3: Información adicional --> */}
  
//        <fieldset>
//            <legend>Información Adicional</legend>
//            <div class="div_container">
//                <label for="freeDeliver" class="form-label-checkbox">Envio sin cargo:</label>
//                <input 
//                  type="checkbox" 
//                  class="form-checkbox" 
//                  id="freeDeliver" 
//                  name="freeDeliver" />
//            </div>
  
//            <label class="form-label label-required">Edad desde:</label>
//            <input 
//                type="number" 
//                class="form-control label-required" 
//                id="ageFrom" 
//                name="ageFrom" 
//                min="0" />
  
//                <p id="ageFromError" class="input-msg-error"></p>
  
//            <label for="ageTo" class="form-label label-required">Edad hasta</label>
//            <input 
//                type="number" 
//                class="form-control" 
//                id="ageTo" 
//                name="ageTo" 
//                min="1" />
              
//                <p id="ageToError" class="input-msg-error"></p>
//        </fieldset>
  
//        {/* <!-- Grupo 4: Foto --> */}
//        <fieldset>
//            <label for="photo" class="form-label label-required">Foto</label>
//            <input 
//                type="file" 
//                class="form-control" 
//                id="photo" 
//                name="photo" 
//                required />
                 
//        </fieldset>
//        <div class="button_container">
//            <button 
//                type="submit" 
//                class="btn btn-primary">Guardar producto</button>
//        </div>
  
//       </form>
//    )
// }

// export default Alta;
