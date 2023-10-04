import React from 'react'

function Input({handleChange,title,name,value}) {
  return (
    <div className="div">
    <input type="radio" onChange={handleChange} name={name} value={value}  /><span>{title}</span>
    </div>
  )
}

export default Input;