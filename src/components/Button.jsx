import React from 'react'
import Icon from './Icon'

export default function Button({
  label,
  icon = "",
  action = () => {},
  className,
  type = "button",
  disabled //Indica si el botón está deshabilitado.
}) 

{
  return (
    <button
        type={type}
        className={className}
        onClick={action}
        disabled={disabled}
    >
      {/* Renderiza el componente Icon si icon está presente (es decir, si icon no es una cadena vacía), utilizando la evaluación corta (&&). Esto permite renderizar el icono solo si se proporciona un nombre de icono. */}
        {icon && <Icon icon={icon} />} {/* Utilizar la evaluación corta y && para renderizar el icono si está presente */}
        {label}
    </button>
  )
}
