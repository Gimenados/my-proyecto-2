// InputField.jsx
import React from 'react';

function InputField({ id, label, type = "text", value, onChange }) {
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
                ></textarea>
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="input-group__input"
                />
            )}
        </div>
    );
}

export default InputField;

