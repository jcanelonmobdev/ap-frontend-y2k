import React from 'react';
import PropTypes from 'prop-types';

import './swichStyles.css';

const SwitchComponent = ({ status, onClick: onClickin }) => {
  return (
    <div data-testid="switch"
      className={`switch-container ${status ? 'active' : ''}`}
      onClick={() => onClickin(!status)}>
      <div className="switch-state">SI</div>
      <div className="switch-state">NO</div>
    </div>
  )
}

SwitchComponent.propTypes = {
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SwitchComponent
