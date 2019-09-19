import React from 'react';
import "./styles.css";

const Nav = () => {
    return (
        <ul className="nav rolNav">
            <a className="nav-link p-1" href="#">APP</a>
            <div className="p-1">|</div>
            <a className="nav-link selected p-1" href="#">ROL</a>
        </ul>
    )
};

export default Nav;
