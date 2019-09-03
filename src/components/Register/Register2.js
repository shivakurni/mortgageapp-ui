import React, { Component } from 'react';
import './Register.css';

class Register2 extends Component {

    render() {
        return (
            <div className="">
                <form className="container" >
                    <div className="row">
                    <div className="col-md-1"></div>

                        <div className="col-md-2">
                            <label><b>Mr/Mrs</b></label>
                            <select className="form-control" value={this.props.title} onChange={this.props.onChange} name="title" id="title">
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label><b>first Name</b></label>
                            <div >
                                <input type="text" className="form-control " name="firstName" id="firstName" value={this.props.firstName} onChange={this.props.onChange} required />
                                <div className="errorMsg">{this.props.firstNameError}</div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label><b>Last Name</b></label>
                            <div >
                                <input type="text" className="form-control " name="lastName" id="lastName" value={this.props.lastName} onChange={this.props.onChange} required />
                                <div className="errorMsg">{this.props.lastNameError}</div>
                            </div>
                        </div>
                    </div>



                    <div class="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label><b>Date Of Birth</b></label>
                            <input type="date" class="form-control" onChange={this.props.onChange} value={this.props.dob} name="dob" id="dob" placeholder=" enter the Date of birth" />
                        </div>


                        <div className="col-md-4">
                            <label><b>Salary</b></label>
                            <div >
                                <input type="text" className="form-control " name="salary" id="salary" value={this.props.salary} onChange={this.props.onChange} required />
                                {/* <div className="errorMsg">{this.props.firstNameError}</div> */}
                            </div>
                        </div>
                        <div className="col-md-1"></div>

                    </div>




                    <div class="row">
                    <div className="col-md-1"></div>

                        <div className="col-md-4">
                            <label><b>Employment status</b></label>
                            <select className="form-control" onChange={this.props.onChange} value={this.props.employementStatus} name="employmentStatus" id="employmentStatus">
                            <option value="professional">Select</option>

                                <option value="Employed">Employed</option>
                                <option value="Self-employed">Self-employed</option>
                            </select>
                        </div>

                        <div className="col-md-4">


                            <label ><b>Occupation</b></label>
                            <select className="form-control" onChange={this.props.onChange} value={this.props.occupation} name="occupation" id="occupation">
                            <option value="professional">Select</option>
                                <option value="professional">professional</option>
                                <option value="Manager">Manager</option>
                                <option value="Other employment">Other employment</option>
                            </select>
                        </div>
                        <div className="col-md-1"></div>

                    </div>
                    {/* <div class="form-group col-md-4">
                        <label><b>What is your contract type?</b></label>
                        <select className="form-control" onChange={this.props.onChange} value={this.props.contractType} name="contractType" id="contractType">
                            <option value="permanent">permanent</option>
                            <option value="Probationary">Probationary</option>
                            <option value="Piecework">Piecework</option>
                            <option value="Sub-Contracted">Sub-Contracted</option>
                            <option value="Seasonal/Temporary">Seasonal/Temporary</option>
                            <option value="Fixed/Short Term Contract">Fixed/Short Term Contract</option>
                            <option value="Agency worker">Agency worker</option>
                        </select>

                    </div> */}
                    {/* <div class="form-group col-md-4">
                        <label><b>When did you start this job?</b></label>
                        <input type="date" class="form-control" onChange={this.props.onChange} value={this.props.jobStartDate} name="jobStartDate" id="jobStartDate" placeholder=" enter the job start date" />
                    </div> */}
                    <div className="nxt-btn">
                        <button id="btn3" className="btn prev-btn" onClick={this.props.prev}>Prev</button>
                        <button id="btn4" className="btn nxt-btn" onClick={this.props.next}>Next..</button>
                    </div>
                </form >
            </div >
        )
    }
}
export default Register2;


