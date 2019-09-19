import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import ButtonCustom from '../Button';

const Footer = ({ info }) => {
    const submitButtonSettings = {
        description: "Ingresar",
        variant: "outline-success",
        size: "sm"
    }

    const handleSubmit = () => {
        console.log("soporte técnico")
    }

    return (
        <div className="footer d-flex">
            <div className="p-4 ml-5 footer-info">
                {info}
            </div>
            <div className="align-self-center">
                <ButtonCustom btn_config={submitButtonSettings} />
            </div>
        </div>
    )
};

export default Footer;
