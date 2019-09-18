import React from 'react';
import "./styles.css";

const Input = ({ label, type, name, handleOnChange, className }) => {
    return (
        <div className="inputcomponent">
            <label className="label">{label}</label>
            <input type={type} name={name} onChange={handleOnChange} className={className}/>
        </div>
    )
}

export default Input;