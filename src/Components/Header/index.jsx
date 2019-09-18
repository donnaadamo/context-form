import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";

const Header = () => {
    return (
        <Row className="header">
            <Col md={12} >
                <img src="logo.jpg" alt=""/>
            </Col>
        </Row>
    )
};

export default Header;
