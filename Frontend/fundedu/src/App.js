import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import store from "./store";
import './App.css';
import FunderLanding from './Components/Landings/funderLanding';
import StudentLanding from './Components/Landings/studentLanding';
import StudentGetStarted from './Components/GetStarted/studentGetStarted';
import FunderGetStarted from './Components/GetStarted/funderGetStarted';
import StudentRegister from './Components/Forms/StudentRegister';
import FunderRegister from './Components/Forms/FunderRegister';
import StudentLogin from './Components/Forms/StudentLogin';
import FunderLogin from './Components/Forms/FunderLogin';
import Dashboard from './Components/Dashboard/dashboard';
import PrivateRoute from './private-route/PrivateRoute'
import callToAction from './Components/cta/cta';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={callToAction} />
            <Route exact path="/student" render={(renderProps) => <StudentGetStarted {...renderProps} />} />
            <Route exact path="/funder" render={(renderProps) => <FunderGetStarted {...renderProps} />} />
            <Route path="/student/home" render={(renderProps) => <StudentLanding {...renderProps} />} />
            <Route path="/funder/home" render={(renderProps) => <FunderLanding {...renderProps} />} />
            <Route path="/student/register" component={StudentRegister} />
            <Route path="/funder/register" component={FunderRegister} />
            <Route path="/student/login" component={StudentLogin} />
            <Route path="/funder/login" component={FunderLogin} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
