import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent';
import HeaderComponent from '../HeaderComponent';
import { getAppInsights } from '../../../services/TelemetryService';

const ErrorScreenComponent = ({ image }) => {
  const history = useHistory();
  
  getAppInsights().trackEvent({ name: 'Prueba insigth error - AP' });
  
  return (
    <div className="familia">
      <div className="container">
        <div className="row">
          <HeaderComponent name="cotización" />
        </div>
        <div className="box-error">
          <div className="box-error__descrip">
            <h3 className="title">¡Lo sentimos!</h3>
            <p className="pt-2">No podemos entregar un valor para este vehículo.</p>
            <div className="box-error__buttons pt-2">
              <ButtonComponent className="button-border button-small" onClick={() => history.goBack()}>VOLVER</ButtonComponent>
              <ButtonComponent className="button-primary button-small" onClick={() => history.goBack()}>REINTENTAR</ButtonComponent>
            </div>
          </div>
          <div className="box-error__img">
            <img data-testid="error-image" src={image} alt="SURA AUTOMOVIL REINTENTAR" />
          </div>
        </div>
      </div>
    </div>
  )
}

ErrorScreenComponent.defaultProps = {
  image: '/img/sura-image-reintentar.svg'
};

export default ErrorScreenComponent
