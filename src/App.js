import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { getToken } from 'common/helpers';

import Login from 'containers/Login';
import Home from 'containers/Home';
import Details from 'containers/Details';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getToken();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) return <Component {...props} />;
        return <Redirect to="/login" />;
      }}
    />
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/details/:id" component={Details} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
