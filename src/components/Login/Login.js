import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                loginId: '',
                password: ''
            },
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }
    handleChange = (event) => {
        const { fields, loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        fields[event.target.name] = event.target.value;
        this.setState({ loginData, fields });
    }
    onClickLogin = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["loginId"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            // this.props.history.push('/accountSummary')

            const { loginData } = this.state;
            console.log(this.state);
            axios.post('http://10.117.189.99:9093/mortgage/login', loginData).then((response) => {
                console.log(response.data);
                this.props.history.push('/register');
            }).catch((error) => {

            });
        }

        else {
            console.log("form not submitted");
        }


    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["loginId"]) {
            formIsValid = false;
            errors["loginId"] = " please enter the Login Id";
        }
        if (typeof fields["loginId"] !== "undefined") {
            if (fields["loginId"].length < 3) {
                formIsValid = false;
                errors["loginId"] = "Please enter loginId which should be greater than the length of 3.";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;

    }
    render() {
        return (
            <div>
                <form className="form1 container">
                    <div className="form-group" >
                        <h2 align="center"> Login form</h2>
                        <label><b>Login Id</b></label>
                        <div>
                            <input type="text" className="form-control " name="loginId" id="loginId" value={this.state.fields.loginId} onChange={this.handleChange} required />
                            <div className="errorMsg">{this.state.errors.loginId}</div>
                        </div>
                    </div>
                    <div className="form-group" >
                        <label><b>Password</b></label>
                        <div >
                            <input type="password" className="form-control " name="password" id="password" value={this.state.fields.password} onChange={this.handleChange} required />
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                    </div>
                    <button type="submit" id="btn1" className="btn btn-primary-outlined" onClick={this.onClickLogin}>Continue</button>

                </form>
            </div>
        )
    }
}
export default Login;