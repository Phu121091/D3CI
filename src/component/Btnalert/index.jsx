import React from 'react'
import "./style.css";

const Btnalert = ({text}) => {
const Alert=()=>{
    alert(text);
}

  return (
    <button className='btn' onClick={Alert}>{text}</button>
  )
}

export default Btnalert