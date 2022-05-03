import React from 'react'
import "./style.css";

const Div = ({form,color}) => {
  return (
    <div className={`${form} ${color}`}><p>Div</p></div>
  )
}

export default Div