import React from 'react'
import classes from './Button.module.css' 

export default function Button({text, buttonClassName, onClick}) {
 
    return (
   <button className={`${buttonClassName} ${classes.button}`} onClick={onClick}>
    {text}
   </button>
  )
}
