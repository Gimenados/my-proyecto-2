import React, { useState } from 'react';
import { postMessage } from '../data/api';



const ContactForm = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '', 
        comment: '' 
    });
    const [loadingForm, setLoadingForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, comment } = formData;

        // Validar el nombre
        if (name.length <= 5) {
            alert('El nombre debe tener menos de 5 letras');
            return;
        }

        // Validar el correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('El formato del correo electrónico es incorrecto');
            return;
        }

        // Validar el comentario
        if (comment.length < 5) {
            alert('El comentario debe tener al menos 5 letras');
            return;
        }

        setLoadingForm(true);
        try {
            const data = await postMessage(formData);
            console.log(data); // Maneja la respuesta de la API según lo necesites
            alert('¡El formulario se envió correctamente!');
            setFormData({ name: '', email: '', comment: '' });
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el formulario');
        } finally {
            setLoadingForm(false);
        }
    };

    return (
        <div className="form_container_contact" id="form">
            <form className="form_element_contact" onSubmit={handleSubmit}>
                <h2>Envianos un mensaje</h2>
                <label htmlFor="name">
                    Nombre:
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="comment">
                    Comentarios:
                    <textarea 
                        id="comment" 
                        name="comment" 
                        rows="4" 
                        value={formData.comment} 
                        onChange={handleChange} 
                    />
                </label>
                <div className="button_container">
                    <button type="submit" disabled={loadingForm}>
                        {loadingForm ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;