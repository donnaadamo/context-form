import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";

const Header = () => {
    return (
        <Row className="header">
            <Col md={12} >
                <p className="headerText">Title</p>
            </Col>
        </Row>
    )
};

export default Header;
