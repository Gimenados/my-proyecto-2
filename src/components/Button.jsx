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
        {icon ? <Icon icon={icon} />  : undefined}
        {label}
    </button>
  )
}