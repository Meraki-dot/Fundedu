import React from 'react';
import Nav from './components/Nav';
import CallToAction from './components/cta'
import { Switch, Route } from 'react-router-dom'
import Student from './GetStarted/studentGetStarted'
import Funder from './GetStarted/funderGetStarted'
import FunderLanding from './Landings/funderLanding';
import StudentLanding from './Landings/studentLanding';
import FunderLogin from './Forms/FunderLogin'
import StudentLogin from './Forms/StudentLogin'
import FunderRegister from './Forms/FunderRegister'
import StudentRegister from './Forms/StudentRegister'

import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Switch>
          <Route exact path='/' render={(renderProps) => <CallToAction {...renderProps} />} />
          <Route exact path='/student' render={(renderProps) => <Student {...renderProps} />}/>
          <Route exact path='/funder' render={(renderProps) => <Funder {...renderProps} />}/>
          <Route path="/student/home" render={(renderProps) => <StudentLanding {...renderProps}/> }/>
          <Route path="/funder/home" render={(renderProps) => <FunderLanding {...renderProps}/> }/>
          <Route path="/student/register" component={StudentRegister} />
          <Route path="/funder/register" component={FunderRegister} />
          <Route path="/student/login" component={StudentLogin} />
          <Route path="/funder/login" component={FunderLogin} />
        </Switch>
      </div>
    </div>
  );
}

export default App;