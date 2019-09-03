import React, { Component } from 'react';
import axios from 'axios';

class AccountType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // modal: false,
            data: [],
            

        }
    }

    componentDidMount() {
        console.log(this.props.match);
        var customerId=localStorage.getItem("customerId")
        axios.get('http://10.117.189.99:9093//mortgage/accountSummary/'+customerId).then((response) => {
          console.log(response.data);    
          // localStorage.setItem("accountNumber",item.accountNumber);

        this.setState({ data: response.data })
        }).catch((error) => {
            console.log(error.message)  
        });
    }

    transactionClick =(item) => {
    localStorage.setItem("accountNumber",item.accountNumber);
    this.props.history.push('./transactionDetails/'+item.accountNumber)
    
    }


    // buyStockHandler = (item) => {
    //     console.log(item);
    //     sessionStorage.setItem("item", JSON.stringify(item));
    //    this.props.history.push(`/placeOrder`)
    // }

    // confirmedStocks = () => {
        
    //     this.props.history.push(`/confirmStocks`)
    // }

    // cancelledStocks = () => {
    
    //     this.props.history.push(`/cancelledStocks`)
    // }

    // trendingStocks = () => {
    //     this.props.history.push(`/trendingStocks`)
    // }

    logout = () => {
        this.props.history.push('/Login')
    }


    render() {
        // console.log(this.state.modal)
        return (
            <div className="row">
                <div className="container header-title">
                <button className="cancel-btn logout-btn nxt-btn" onClick={this.logout}>Logout</button>

                   
                    {/* <span className="list-title">List of Stocks</span>                    */}
                    {/* <button className="cancel-btn">Cancelled Stocks</button>
                    <button className="cancel-btn">Trending Stocks</button>
                    <button className="cancel-btn">Confirmed Stocks</button>                     */}
                </div>
                <div className="col-md-2"></div>
                <div className="container title col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="header-text">Account Number</th>
                                {/* <th scope="col" className="header-text">Date</th> */}
                                <th scope="col" className="header-text">Balance</th>
                                <th scope="col" className="header-text">AccountType</th>
                                <th scope="col" className="header-text">Last 5 Transactions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text">{item.accountNumber}</td>
                                        <td className="header-text">{item.balance}</td>
                                        {/* <td className="header-text">{item.accountType}</td> */}
                                        <td className="header-text">{item.accountType}</td>
                                        <td><button onClick={()=>this.transactionClick(item)}>Transaction Details</button></td>

                                        {/* <td className="header-text">{item.description}</td> */}

                                        {/* <td><button onClick={() => this.buyStockHandler(item)}>Buy</button></td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default AccountType;