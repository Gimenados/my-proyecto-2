import React, { useState } from 'react';
import { postMessage } from '../data/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '', 
        subject: '',
        body: ''  // Cambiado de 'comment' a 'body'
    });
    const [loadingForm, setLoadingForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, subject, body } = formData;  

        if (name.length <= 5) {
            alert('El nombre debe tener más de 5 letras');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('El formato del correo electrónico es incorrecto');
            return;
        }

        if (body.length < 5) {  
            alert('El comentario debe tener al menos 5 letras');
            return;
        }

        if (subject.length <= 2) {
            alert('El asunto debe tener más de 2 letras');
            return;
        }

        setLoadingForm(true);
        try {
            const data = await postMessage(formData);
            console.log(data); 
            alert('¡El formulario se envió correctamente!');
            setFormData({ name: '', email: '', subject: '', body: '' });  
        } catch (error) {
            console.error('Error details:', error.response?.data || error.message || error);
            if (error.response && error.response.data && error.response.data.errors) {
                alert(`Errores de validación: ${error.response.data.errors.map(err => err.body).join(', ')}`);
            } else {
                alert('Hubo un error al enviar el formulario');
            }
        } finally {
            setLoadingForm(false);
        }
    };

    return (
        <div className="form_container_contact" id="form">
            <form className="form_element_contact" onSubmit={handleSubmit}>
                <h2>Envíanos un mensaje</h2>
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
                <label htmlFor="subject">
                    Asunto:
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                     />
                </label>
                <label htmlFor="body">  
                    Comentarios:
                    <textarea 
                        id="body" 
                        name="body"  
                        rows="4" 
                        value={formData.body}  
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

