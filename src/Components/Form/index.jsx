import React, { useState, useContext, useReducer } from 'react';
import "./styles.css";
import { PersonContext } from '../../Store/PersonContext'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../Input';
import ButtonCustom from '../Button';
import { GLOBAL } from '../../Config/global';

const Form = () => {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            lastName: '',
            email: '',
            password: ''
        }
    );
    const [persons, setPersons] = useContext(PersonContext);

    const submitButtonSettings = {
        description: "Registrarse",
        variant: "success",
        size: "sm"
    }

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    }

    const handleSubmit = () => {
        setPersons(prevPersons => [...prevPersons, userInput]);
    }

    // const showUser = () => {
    //     console.log(persons);
    // }

    return (
        <div className="fContainer">
            <p className="m-0 formTitle mb-2">{GLOBAL.FORM.TITLE}</p>
            <Row>
                <Col md={6}>
                    <Input label={GLOBAL.FORM.NAME} type="text" className="form-control" name="name" value={userInput.name} handleOnChange={handleChange} />
                </Col>
                <Col md={6}>
                    <Input label={GLOBAL.FORM.LAST_NAME} type="text" className="form-control" name="lastName" value={userInput.lastName} handleOnChange={handleChange} />
                </Col>
            </Row>
            <Input label={GLOBAL.FORM.EMAIL} type="email" className="form-control" name="email" value={userInput.email} handleOnChange={handleChange} />
            <Input label={GLOBAL.FORM.PASSWORD} type="password" className="form-control" name="password" value={userInput.password} handleOnChange={handleChange} />
            <p className="form-text text-muted notes m-1">{GLOBAL.FORM.NOTE_1}</p>
            <Input label={GLOBAL.FORM.PASSWORD_2} type="password" className="form-control" />
            <p className="form-text text-muted notes mb-1">{GLOBAL.FORM.NOTE_2}</p>
            <input type="checkbox" /><span className="terms">{GLOBAL.FORM.TERMS}</span>
            <ButtonCustom btn_config={submitButtonSettings} handleOnClick={handleSubmit} />
            {/* <ButtonCustom btn_config={submitButtonSettings} handleOnClick={showUser} /> */}
        </div>
    )
}

export default Form;
