import React, { useState, createContext } from 'react';

export const PersonContext = createContext();

export const PersonProvider = props => {
    const [persons, setPersons] = useState([
    ]);

    return <PersonContext.Provider value={[persons, setPersons]}>{props.children}</PersonContext.Provider>;
};