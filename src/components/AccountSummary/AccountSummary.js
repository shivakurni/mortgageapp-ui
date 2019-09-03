import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



class AccountSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: []
    }
  }
  componentDidMount() {
    this.getData().then(response => {
      this.setState({ account: response.data });
    });

  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.231:9090/mortgage/api/summary/2').then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  logout = () => {
    alert("logout");
    // this.props.history.push('./login');
  }


  render() {
    return (
      <div>
        <button id="btn6" className="btn btn-otline-primary" onClick={this.logout}>Logout</button>
        <h1>Account Summary</h1>
        <table>
          <thead>
            <tr>
              <td>Account Type</td>
              <td>Balance</td>
              <td>Account Number</td>
            </tr>
          </thead>
          <tbody>
            {this.state.account.map((item, j) => {
              return (
                <div className="box">
                  <tr key={j}>
                    <td>Account Type:{item.accountType}</td>
                    <td>Balance{item.balance}</td>
                    <td>Account Number:{item.accountNumber}</td>
                  </tr>
                </div>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}
export default AccountSummary;



