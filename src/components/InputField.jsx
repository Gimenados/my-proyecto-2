// InputField.jsx
import React from 'react';

function InputField({ 
    id, 
    label, 
    type = "text", 
    value, 
    onChange,
    ...props
 }) {
    
    if (type === "file") {
        return (
            <div className="input-group__container">
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    name={id}
                    type={type}
                    onChange={onChange}
                    className="input-group__input"
                    {...props}
                />
            </div>
        );
    }

    return (
        <div className="input-group__container">
            <label htmlFor={id}>{label}</label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className="input-group__input"
                    {...props}
                ></textarea>
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="input-group__input"
                    {...props}
                />
            )}
        </div>
    );
}

export default InputField;

