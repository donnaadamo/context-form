import React from 'react';
import "./styles.css";
import ButtonCustom from '../Button';

const Rol = ({ icon, rol }) => {
    const submitButtonSettings = {
        description: "Ingresar",
        variant: "success",
        size: "sm"
    }
    
    return (
        <div className="rol-container p-5">
            <img src={icon} alt="" className="icons"/>
            <p className="mt-4 rol">{rol}</p>
            <ButtonCustom btn_config={submitButtonSettings} className="rol-button"/>
        </div>
    )
}

export default Rol;