import React, { useState, createContext } from 'react';

export const RolContext = createContext();

export const RolProvider = props => {
    const [rol, setRol] = useState([
        {
            name: 'administrador',
            caracteristica1: 'Característica 1',
            caracteristica2: 'Característica 2',
            caracteristica3: 'Característica 3',
            caracteristica4: 'Característica 4'
        }
        // {
        //     name: 'usuario',
        //     caracteristica1: 'Característica 1',
        //     caracteristica2: 'Característica 2',
        //     caracteristica3: 'Característica 3',
        //     caracteristica4: 'Característica 4'
        // }
    ]);

    return <RolContext.Provider value={[rol, setRol]}>{props.children}</RolContext.Provider>;
};