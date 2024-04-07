import React from 'react'
import Icon from './Icon'

export default function Button({
  label,
  icon = "",
  action = () => {},
  className,
  type = "button",
  disabled
}) {
  return (
    <button
        type={type}
        className={className}
        onClick={action}
        disabled={disabled}
    >
        {icon && <Icon icon={icon} />} {/* Utilizar la evaluación corta y && para renderizar el icono si está presente */}
        {label}
    </button>
  )
}
