// TODO: Este archivo deberia estar en alguna carpeta utils. No es un custom hook

const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$");
    return regex.test(string);
};

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`;
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`;
    } else {
        return true;
    }
};

const validateEmails = (email) => {
    const regex = new RegExp("^[A-Za-z []]+$");
    return regex.test(email);
};

const validatePositiveNumber = num => num >= 0;

const validateInt = num => Number.isInteger(parseInt(num));

function validateForm(values) {
    const errores = {};

    const nombreError = validateStgLength(values.name, 3, 50);
    if (nombreError !== true) {
        errores.name = nombreError;
    } else if (!validateStrings(values.name)) {
        errores.name = 'El nombre solo puede contener letras y espacios';
    }

    const brandError = validateStgLength(values.brand, 3, 50);
    if (brandError !== true) {
        errores.brand = brandError;
    } else if (!validateStrings(values.brand)) {
        errores.brand = 'La marca solo puede contener letras y espacios';
    }

    const categoryError = validateStgLength(values.category, 3, 50);
    if (categoryError !== true) {
        errores.category = categoryError;
    } else if (!validateStrings(values.category)) {
        errores.category = 'La categoría solo puede contener letras y espacios';
    }

    const shortDescError = validateStgLength(values.shortDesc, 5, 100);
    if (shortDescError !== true) {
        errores.shortDesc = shortDescError;
    }

    if (!validatePositiveNumber(values.price)) {
        errores.price = 'El precio debe ser un número positivo';
    }

    if (!validatePositiveNumber(values.stock)) {
        errores.stock = 'El stock debe ser un número positivo';
    }

    if (!validateInt(values.ageFrom)) {
        errores.ageFrom = 'La edad desde debe ser un número entero';
    }

    if (!validateInt(values.ageTo)) {
        errores.ageTo = 'La edad hasta debe ser un número entero';
    }


    return errores;
}

function showErrors(errores, inputProps) {
    let mensaje = 'Por favor corrija los siguientes errores:\n\n';
    for (let key in errores) {
        const inputLabel = inputProps[key] ? inputProps[key].inputLabel : key;
        mensaje += `${errores[key]} en ${inputLabel}\n`;
    }
    alert(mensaje);
}

function showLoadedProduct() {
    alert('Producto cargado');
}

export { validateForm, showErrors, showLoadedProduct, validateStgLength, validateStrings, validateEmails };