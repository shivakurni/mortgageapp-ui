import React, { Component } from 'react';
import Register from './Register';
import Register2 from './Register2';
import Register3 from './Register3';
import Register4 from './Register4';
import Steps from './Steps';
import Details from './Details';

class MasterRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            operationType: '',
            propertyCost: '',
            propertyCostError: '',
            deposit: '',
            depositError: '',
            employmentStatus: '',
            occupation: '',
            // contractType: '',
            // jobStartDate: '',
            // title: '',
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            // surName: '',
            // surNameError: '',
            dob: '',
            phoneNumber: '',
            phoneNumberError: '',
            email: '',
            emailError: '',
            confirmEmail: '',
            confirmEmailError: ''
        }

    }

    validate = () => {
        let isError = false;
        const errors = {
            propertyCostError: '',
            depositError: '',
            firstNameError: '',
            lastNameError: '',
            phoneNumberError: '',
            emailError: '',
            confirmEmailError: ''
        }


        if ((this.state.propertyCost) < 100000) {
            isError = true;
            errors.propertyCostError = "Enter Minimum 100000 Euros";
        }

        if (this.state.deposit < 0) {
            isError = true;
            errors.depositError = "The deposit amount should not be negative";
        }
        if (this.state.step > 1) {
            if (this.state.firstName < 1) {
                isError = true;
                errors.firstNameError = "First name cannot be null";
            }
            if ((this.state.firstName) !== 'undefined') {
                if (!(this.state.firstName).match(/^[a-zA-Z ]*$/)) {
                    isError = true;
                    errors.firstNameError = " please enter the alphabet characters only";
                }
            }
            if (this.state.lastName < 1) {
                isError = true;
                errors.lastNameError = "Last name cannot be null";
            }
            if ((this.state.lastName) !== 'undefined') {
                if (!(this.state.lastName).match(/^[a-zA-Z ]*$/)) {
                    isError = true;
                    errors.lastNameError = " please enter the alphabet characters only";
                }
            }
            // if (this.state.surName < 1) {
            //     isError = true;
            //     errors.surNameError = "surName name cannot be null";
            // }
            // if ((this.state.surName) !== 'undefined') {
            //     if (!(this.state.surName).match(/^[a-zA-Z ]*$/)) {
            //         isError = true;
            //         errors.surNameError = " please enter the alphabet characters only";
            //     }
            // }
        }

        if (this.state.step > 2) {
            if (this.state.phoneNumber < 1) {
                isError = true;
                errors.phoneNumberError = "please enter the phone number";
            }
            if ((this.state.phoneNumber) !== 'undefined') {
                if (!(this.state.phoneNumber).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
                    isError = true;
                    errors.phoneNumberError = "please enter the valid phone number";
                }
            }
            if (this.state.email.indexOf('@') === -1) {
                isError = true;
                errors.emailError = 'Please enter a valid email address';
            }
            if (this.state.email !== this.state.confirmEmail) {
                isError = true;
                errors.confirmEmail = 'Email does not match';
            }
        }
        this.setState({ ...this.state, ...errors })
        return isError;
    }


    next = (e) => {
        e.preventDefault();
        const err = this.validate()
        if (!err) {
            this.setState({
                step: this.state.step + 1,
                propertyCostError: '',
                depositError: '',
                firstNameError: '',
                lastNameError: '',
                // surNameError: '',
                phoneNumberError: '',
                emailError: '',
                confirmEmailError: ''
            })
        }
    }
    prev = () => {
        const err = this.validate()
        if (!err) {
            this.setState({ step: this.state.step - 1 })
        }
    }
    handleOnChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }



    render() {
        switch (this.state.step) {
            case 1:
                return <div>
                    <Steps step={this.state.step} />
                    <Register
                        operationType={this.state.operationType}
                        propertyCost={this.state.propertyCost}
                        propertyCostError={this.state.propertyCostError}
                        deposit={this.state.deposit}
                        depositError={this.state.depositError}
                        onChange={this.handleOnChange.bind(this)}
                        next={this.next.bind(this)} />
                </div>
            case 2:
                return <div>
                    <Steps step={this.state.step2} />
                    <Register2
                        employmentStatus={this.state.employmentStatus}
                        occupation={this.state.occupation}
                        firstName={this.state.firstName}
                        firstNameError={this.state.firstNameError}
                        lastName={this.state.lastName}
                        lastNameError={this.state.lastNameError}
                        // contractType={this.state.contractType}
                        // jobStartDate={this.state.jobStartDate}
                        dob={this.state.dob}
                        onChange={this.handleOnChange.bind(this)}
                        next={this.next.bind(this)}
                        prev={this.prev.bind(this)} />
                </div>
            // case 3:
            //     return <div>
            //         <Steps step={this.state.step} />
            //         <Register3
            //             title={this.state.title}
            //             // firstName={this.state.firstName}
            //             // firstNameError={this.state.firstNameError}
            //             // lastName={this.state.lastName}
            //             // lastNameError={this.state.lastNameError}
            //             // surName={this.state.surName}
            //             // surNameError={this.state.surNameError}
            //             // dob={this.state.dob}
            //             onChange={this.handleOnChange.bind(this)}
            //             next={this.next.bind(this)}
            //             prev={this.prev.bind(this)} />
            //     </div>
            case 3:
                return <div>
                    <Steps step={this.state.step3} />
                    <Register4
                        phoneNumber={this.state.phoneNumber}
                        phoneNumberError={this.state.phoneNumberError}
                        email={this.state.email}
                        emailError={this.state.emailError}
                        confirmEmail={this.state.confirmEmail}
                        confirmEmailError={this.state.confirmEmailError}
                        onChange={this.handleOnChange.bind(this)}
                        next={this.next.bind(this)}
                        prev={this.prev.bind(this)}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        occupation={this.state.occupation}
                        operationType={this.state.operationType}
                        dob={this.state.dob}
                        deposit={this.state.deposit}
                        propertyCost={this.state.propertyCost} />
                </div>
            case 5:
                return <Details />
            default:
                return null
        }
    }
}
export default MasterRegister;



