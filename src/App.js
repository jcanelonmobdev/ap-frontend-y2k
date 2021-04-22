import React from 'react';
import ErrorScreenComponent from './components/commons/ErrorScreenComponent';
import QuotationFormComponent from './pages/QuotationFormComponent';
import TelemetryProvider from './services/TelemetryProvider';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import config from './enviroment';

function App() {
  return (
    <Router>
      <TelemetryProvider instrumentationKey={config.APPLICATION_INSIGHTS}>
        <Switch>
          <Route path="/ap/cotizacion" component={QuotationFormComponent} />
          <Route exact path="/">
            <Redirect to={`/ap/cotizacion`} />
          </Route>
          <Route path="/error" component={ErrorScreenComponent} />
          <Route path="/">
            <h1>404 works</h1>
          </Route>
        </Switch>
      </TelemetryProvider>
    </Router>
  );
}

export default App;