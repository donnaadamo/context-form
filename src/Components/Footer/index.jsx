import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import ButtonCustom from '../Button';

const Footer = ({ info }) => {
    const submitButtonSettings = {
        description: "Soporte técnico",
        variant: "outline-success",
        size: "sm"
    }

    const handleSubmit = () => {
        console.log("soporte técnico")
    }

    return (
        <div className="footer d-flex justify-content-between">
            <div className="p-4 ml-5 footer-info">
                {info}
            </div>
            <div className="align-self-center mr-5">
                <ButtonCustom btn_config={submitButtonSettings} />
            </div>
        </div>
    )
};

export default Footer;
