import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";

const Footer = ({ info }) => {
    return (
        <Row className="header">
            <Col md={12} >
                {info}
            </Col>
        </Row>
    )
};

export default Footer;
