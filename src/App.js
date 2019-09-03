import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import MasterRegister from './components/Register/MasterRegister';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import './App.css';
import Register2 from './components/Register/Register2';
import Register4 from './components/Register/Register4';
import Register from './components/Register/Register';
import Register3 from './components/Register/Register3';
import Details from './components/Register/Details';
import AccountSummary from './components/AccountSummary/AccountSummary';

import Capture from '../src/images/Capture.PNG';



class App extends Component {
  render() {
    return (

      <HashRouter>
        <div className="App">
          <nav className="navbar navbar-default">
            <div className="container-fluid nav-header">
              <img className="Capture" src={Capture} alt="Capture" />
              <Link className="navbar-brand" to='/'>ING Bank</Link>
            </div>
          </nav>


          <Route path="/" component={MasterRegister} exact />
          <Route path="/masterRegister" component={MasterRegister} />
          <Route path="/register" component={Register} />
          <Route path="/register2" component={Register2} />
          <Route path="/register3" component={Register3} />
          <Route path="/register4" component={Register4} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/accountSummary" component={AccountSummary} />


        </div>
      </HashRouter>
    )
  }
}

export default App;
