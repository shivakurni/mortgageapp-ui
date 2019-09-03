import React, { Component } from 'react';
import axios from 'axios';

class TransactionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // modal: false,
            data: [],
            

        }
    }

    componentDidMount() {
        console.log(this.props.match);
        
var accountNumber=localStorage.getItem("accountNumber");
        axios.get(`http://10.117.189.99:9093/mortgage/transactions/` +accountNumber).then((response) => {
          console.log(response.data);    
          localStorage.setItem("accountNumber",response.data.accountNumber);

        this.setState({ data: response.data })
        }).catch((error) => {
            console.log(error.message)
        });
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
                                <th scope="col" className="header-text">Date</th>
                                <th scope="col" className="header-text">Transaction Type</th>
                                <th scope="col" className="header-text">Description</th>
                                <th scope="col" className="header-text">Amount</th>

                                {/* <th scope="col" className="header-text">Description</th> */}

                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text">{item.accountNumber}</td>
                                        <td className="header-text">{item.transactionDate}</td>
                                        <td className="header-text">{item.transactionType}</td>
                                        <td className="header-text">{item.decription}</td>
                                        <td className="header-text">{item.amount}</td>

                                        {/* <td><button>Transcaction Details</button></td> */}

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
export default TransactionDetails;