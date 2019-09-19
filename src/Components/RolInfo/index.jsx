import React, { useContext } from 'react';
import "./styles.css";
import { RolContext } from '../../Store/RolContext';

const RolInfo = () => {
    const [rol, setRol] = useContext(RolContext);

    return (
        <div className="d-flex justify-content-md-end justify-content-sm-center">
            {rol.map(rol => (
                <div className="rolInfo-container">
                    <div className="rolInfo-title p-2">
                        <p className="m-0 ml-3">Rol {rol.name}</p>
                    </div>
                    <div className="my-3 ml-1">
                        <p className="m-0 rolInfo-features ml-4">Info del rol {rol.name}</p>
                        <ul>
                        <li>{rol.caracteristica1}</li>
                        <li>{rol.caracteristica2}</li>
                        <li>{rol.caracteristica3}</li>
                        <li>{rol.caracteristica4}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RolInfo;