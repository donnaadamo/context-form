import React from 'react';
import "./styles.css";
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonCustom = ({ btn_config, onClick }) => {
    return (
        <Button variant={btn_config.variant} size={btn_config.size} onClick={onClick} block >{btn_config.description}</Button>
    )
}

Button.propTypes = {
    description: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string
}

export default ButtonCustom;