import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import { GLOBAL } from '../../Config/global';

const Footer = () => {
    return (
        <Row className="header">
            <Col md={12} >
                {GLOBAL.FOOTER.DATA}
            </Col>
        </Row>
    )
};

export default Footer;
