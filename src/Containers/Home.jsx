import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import Footer from '../Components/Footer';
import { PersonProvider } from '../Store/PersonContext';
import Form from '../Components/Form';

const Home = () => {

  return (
    <PersonProvider>
      <Container fluid={true}>
        <Header />
        <Row className="my-5 box-container">
          <Col md={2}>
          </Col>
          <Col md={4}>
            <img src="madre.jpg" alt="" />
          </Col>
          <Col md={4}>
            <Form />
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <Footer />
      </Container >
    </PersonProvider>
  );
}

export default Home;
