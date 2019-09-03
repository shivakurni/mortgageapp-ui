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
// import Details from './components/Register/Details';
// import AccountSummary from './components/AccountSummary/AccountSummary';
import DetailsPage from '../src/components/details/Details'
import Capture from '../src/images/Capture.PNG';
import AccountSummary from '../src/components/AccountSummary/AccountSummary'
import TransactionDetails from '../src/components/transactionDetails/transactionDetails'
import { withTranslation } from 'react-i18next';



class App extends Component {

  handleSelect = (event) => {
    let { i18n } = this.props;
    i18n.changeLanguage(event.target.value)
  }



  render() {
    let { t  } = this.props;
    return (

      <HashRouter>
        <div className="App">
          <nav className="navbar navbar-default nav-tab">
            <div className="container-fluid nav-header">
              <img className="Capture" src={Capture} alt="Capture" />
              <Link className="navbar-brand" to='/'>ING Bank</Link>
              <select onChange={this.handleSelect}>
              <option value="en">English</option>
              <option value="sp">Spanish</option>
            </select>
            </div>
          </nav>


          <Route path="/" component={MasterRegister} exact />
          <Route path="/masterRegister" component={MasterRegister} />
          <Route path="/register" component={Register} />
          <Route path="/register2" component={Register2} />
          <Route path="/register3" component={Register3} />
          <Route path="/register4" component={Register4} />
          {/* <Route path="/details" component={Details} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/accountSummary" component={AccountSummary} /> */}
          <Route path="/detailsPage" component={DetailsPage} />
          <Route path="/accountSummary" component={AccountSummary} />
          <Route path="/transactionDetails" component={TransactionDetails} />



        </div>
      </HashRouter>
    )
  }
}

export default  withTranslation()(App);
