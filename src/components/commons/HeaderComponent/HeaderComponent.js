import React from 'react'
import PropTypes from 'prop-types'

function HeaderComponent({ name, alt, logo }) {
  return (
    <div className="familia-corredor__header">
      <h3>{name}</h3>
      <img className="logo" src={logo} alt={alt} />
    </div>
  )
}

HeaderComponent.defaultProps = {
  name: '',
  alt: 'LOGO SURA',
  logo: '/img/logo-preview.png'
};

HeaderComponent.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  logo: PropTypes.string,
}

export default HeaderComponent
