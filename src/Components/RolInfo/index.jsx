import React, { useContext } from 'react';
import "./styles.css";
import { RolContext } from '../../Store/RolContext';

const RolInfo = () => {
    const [rol, setRol] = useContext(RolContext);

    return (
        <div className="rolInfo-container">
            {rol.map(rol => (
                <div>
                    <div className="rolInfo-title text-center">
                        Rol {rol.name}
                    </div>
                    <div>
                        <p className="m-0">Info del rol {rol.name}</p>
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