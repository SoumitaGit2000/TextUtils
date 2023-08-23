import React from 'react'

export default function Alert(props) {
    
    const capitalize = (word)=>{
        const w=word.toLowerCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.ty)}</strong>: {props.alert.msg}
        
        </div>
  )
}
