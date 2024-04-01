import React from 'react';

  function Alta() {
    return (
       <form className="form_container_high" id="uploadForm" onsubmit="onSubmitProduct(event)">
        <h2>Dar de alta un producto</h2>

        <fieldset>

            {/* <!-- Grupo 1: Información general --> */}

            <legend>Informacion general</legend>
            <label htmlFor="name" className='form-label label-required'>Nombre</label>
            <input type="text" className="form-control" id="name" name="name" required/>

            <p id="nameError" className="input-msg-error"></p>

            <label for="price" className="form-label label-required">Precio</label>
            <input type="number" className="form-control" id="price" name="price" required />

                <p id="priceError" className="input-msg-error"></p>

            <label for="stock" className="form-label label-required">Stock</label>
            <input type="number" className="form-control" id="stock" name="stock" required min="0" />

                <p id="stockError" className="input-msg-error"></p>

            <label for="brand" className="form-label label-required">Marca</label>
            <input type="text" className="form-control" id="brand" name="brand" maxlength="20" />

                <p id="brandError" className="input-msg-error"></p>

            <label for="category" className="form-label label-required">Categoría</label>
            <input type="text" className="form-control" id="category" name="category" required />

                 <p id="categoryError" className="input-msg-error"></p>
        </fieldset>

        {/* <!-- Grupo 2: Descripción --> */}

        <fieldset>
            <legend>Descripción</legend>
            <label for="shortDescription" class="form-label label-required">Descripción corta</label>
            <textarea id="shortDescription"  name="shortDescription" rows="4" required maxlength="120"></textarea>
             
                  <p id="shortDescriptionError" class="input-msg-error"></p>

            <label for="longDescription" class="form-label">Descripción larga</label>
            <textarea id="longDescription" name="longDescription" rows="8"></textarea>
        </fieldset>

        {/* <!-- Grupo 3: Información adicional --> */}

        <fieldset>
            <legend>Información Adicional</legend>
            <div class="div_container">
                <label for="freeDeliver" class="form-label-checkbox">Envio sin cargo:</label>
                <input type="checkbox" class="form-checkbox" id="freeDeliver" name="freeDeliver" />
            </div>

            <label class="form-label label-required">Edad desde:</label>
            <input type="number" class="form-control label-required" id="ageFrom" name="ageFrom" min="0" />

                <p id="ageFromError" class="input-msg-error"></p>

            <label for="ageTo" class="form-label label-required">Edad hasta</label>
            <input type="number" class="form-control" id="ageTo" name="ageTo" min="1" />
                <p id="ageToError" class="input-msg-error"></p>
        </fieldset>

        {/* <!-- Grupo 4: Foto --> */}
        <fieldset>
            <label for="photo" class="form-label label-required">Foto</label>
            <input type="file" class="form-control" id="photo" name="photo" required />
                  
        </fieldset>
        <div class="button_container">
            <button type="submit" class="btn btn-primary">Guardar producto</button>
        </div>

       </form>
    );
  }

export default Alta;
