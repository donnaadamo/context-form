import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";

const Footer = ({ info }) => {
    return (
        <Row className="footer">
            <div className="p-4 ml-5 footer-info">
                {info}
            </div>
        </Row>
    )
};

export default Footer;
