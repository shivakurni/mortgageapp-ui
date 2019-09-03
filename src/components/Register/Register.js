import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

    render() {
        return (
            <div align="center row">
                <h1 align="center mort-title">Do you want to Buy a Home Loan, Please fill the details...</h1>
                <form className="form1 container row" >
                    <div className="form-group col-md-4">
                        <label ><b>Operation Type</b></label>
                        <select className="form-control" onChange={this.props.onChange} value={this.props.operationType} name="operationType" id="operationType">
                        <option value="">Select</option>

                            <option value="Buying my first home">Buying my first home</option>
                            <option value="Moving to another home">Moving to another home</option>
                        </select>
                    </div>

                    <div className="form-group col-md-4" >
                        <label><b>Property Cost</b></label>
                        <div className="input-symbol-euro">
                            <input type="text" className="form-control" name="propertyCost" id="propertyCost" value={this.props.propertyCost} min="1" step="1" onChange={this.props.onChange} required />
                            <div className="errorMsg">{this.props.propertyCostError}</div>
                        </div>
                    </div>
                    <div className="form-group col-md-4" >
                        <label><b>Deposit Amount</b></label>
                        <div className="input-symbol-euro">
                            <input type="number" className="form-control " name="deposit" id="deposit" value={this.props.deposit} min="1" step="1" onChange={this.props.onChange} required />
                            <div className="errorMsg">{this.props.depositError}</div>
                        </div>
                    </div>

                    <div className="form-group nxt-btn">
                        <button id="btn2" className="btn nxt-btn" onClick={this.props.next}>Next..</button>
                    </div>
                </form>

            </div>
        )
    }
}
export default Register;