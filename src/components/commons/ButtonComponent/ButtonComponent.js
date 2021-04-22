import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ children, disabled, onClick, className }) => {

  const handleClick = () => {
    if (disabled) return;
    onClick();
  }

  return (
    <button className={`button ${className} ${disabled ? 'button-disabled' : ''}`}
      onClick={handleClick} >{children}</button>
  )
}

ButtonComponent.defaultProps = {
  className: '',
  disabled: false,
  onClick: /* istanbul ignore next */ () => null
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ButtonComponent
