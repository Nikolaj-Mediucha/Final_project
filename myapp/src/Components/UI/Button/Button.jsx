import React from 'react'
import classes from './Button.module.css'

export default function Button({ text, buttonClassName, onClick, disabled }) {
  return (
    <button className={`${buttonClassName} ${classes.button}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
