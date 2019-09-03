import React,{Component} from 'react';
import './Register.css';
import axios from 'axios';
import swal from 'sweetalert'
import { withTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom'



class Register4 extends Component{


    handleFinish=(e)=>{
        e.preventDefault();
        let registerData={
            operationType:this.props.operationType,
            propertyCost:this.props.propertyCost,
            deposit:this.props.deposit,
            occupation:this.props.occupation,
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            dob:this.props.dob,
            phoneNumber:this.props.phoneNumber,
            email:this.props.email
         }
         console.log(registerData);
             axios.post('http://10.117.189.99:9093/mortgage/mortgageSignup',registerData).then((response)=>{
             console.log(response.data);
            //  this.props.history.push('/login');
             localStorage.setItem("loginId",response.data.loginId);
             localStorage.setItem("password",response.data.password);

             localStorage.setItem("mortgageAccountNumber",response.data.mortgageAccountNumber);
             localStorage.setItem("transactionAccountNumber",response.data.transactionAccountNumber);
            // swal(response.data.message)
            this.props.history.push('/detailsPage');
           
         }).catch((error)=>{
             console.log(error);        
         });
    }

    // login = () => {
    //     this.props.history.push('/login');
    // }
    render(){
        return(
            <div align="center" className="container">
                <h1 align="center">Contact  Details</h1>
                <button id="btn8" className="" onClick={this.login}>Login</button>

                    <form className="form1 row" >
                      <div className="form-group col-md-4" >
                            <label><b>Mobile Number</b></label>
                                        <input type="number" className="form-control "  name="phoneNumber" id="phoneNumber" value={this.props.phoneNumber}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.phoneNumberError}</div>
                        </div>
                        <div className="form-group col-md-4" >
                            <label><b>Email:</b></label>
                                        <input type="email" className="form-control "  name="email" id="email"  value={this.props.email} onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.emailError}</div>
                        </div>
                        <div className="form-group col-md-4" >
                            <label><b>Confirm Email:</b></label>
                                        <input type="email" className="form-control "  name="confirmEmail" id="confirmEmail"  value={this.props.confirmEmail} onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.confirmEmailError}</div>
                        </div>
                        <div className="nxt-btn">
                        <button id="btn7" className="btn prev-btn"  onClick={this.props.prev}>Prev</button>
                         <button id="btn8" className="btn nxt-btn" onClick={this.props.next}>Finish</button>
                         <button id="btn8" className="btn nxt-btn" onClick={this.handleFinish}>Submit</button>

                </div> 
                    
           
    </form>
    
            </div>
        )
    }
}
export default withRouter(Register4);
// export default Register4;