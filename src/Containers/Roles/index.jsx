import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import Footer from '../../Components/Footer';
import Rol from '../../Components/Rol';
import AdminIcon from '../../Resources/images/user-lock-solid.svg';
import UserIcon from '../../Resources/images/user-solid.svg';
import { GLOBAL } from '../../Config/global';
import RolInfo from '../../Components/RolInfo';
import { RolProvider } from '../../Store/RolContext';
import Nav from '../../Components/Nav';

const Roles = () => {

    return (
        <RolProvider>
        <Container fluid={true}>
            <Header />
            <Row>
                <Col md={3} className="d-flex justify-content-center mt-3">
                    <Nav />
                </Col>
                <Col md={9}>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="col2">
                    <h4 className="text-center mt-3 mb-5">Elegir el rol para entrar a la plataforma</h4>
                    <div className="rol-selection">
                        <Rol rol="Rol administrador" icon={AdminIcon} />
                        <Rol rol="Rol usuario" icon={UserIcon} />
                    </div>
                </Col>
                <Col md={3} className="col3">
                    <RolInfo />
                </Col>
            </Row>
            <p className="text-center my-5">Dependiendo el rol elegido los permisos a los que podrás acceder serán diferentes.</p>
            <Row>
            <Footer info={GLOBAL.FOOTER.DATA_ROLES}/>
            </Row>
        </Container >
        </RolProvider>
    );
}

export default Roles;
