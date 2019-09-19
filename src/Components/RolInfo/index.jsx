import React, { useContext } from 'react';
import "./styles.css";
import { RolContext } from '../../Store/RolContext';

const RolInfo = () => {
    const [rol, setRol] = useContext(RolContext);

    return (
        <div className="rolInfo-container float-right">
            {rol.map(rol => (
                <div>
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