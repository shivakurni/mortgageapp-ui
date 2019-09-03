import React,{Component} from 'react';
import './Register.css';

class Register3 extends Component{
   
    render(){
        return(
            <div align="center">
                <h1 align="center">Applicant 1</h1>
                    <form className="form1" >
                    <div class="form-group formgroup">
                            <label><b>Title</b></label>
                            <select className="form-control"   value={this.props.title} onChange={this.props.onChange}  name="title" id="title">
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                                <option value="Dr">Dr</option>
                                <option value="Other">Other</option>
                            </select> 
                            </div>
                      <div className="form-group formgroup" >
                            <label><b>first Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="firstName" id="firstName" value={this.props.firstName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.firstNameError}</div>
                                     </div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>Middle Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="middleName" id="middleName" value={this.props.middleName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.middleNameError}</div>
                                     </div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>Sur Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="surName" id="surName" value={this.props.surName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.surNameError}</div>
                                     </div>
                        </div>
                        <div class="form-group formgroup">
                            <label><b>Date Of Birth</b></label>
                            <input type= "date" class="form-control"  onChange={this.props.onChange}   value={this.props.dob} name="dob" id="dob" placeholder=" enter the Date of birth"/>
                        </div>  
                        <div className="form-group">
                        <button  id="btn5" className="btn btn-primary"  onClick={this.props.prev}>Prev</button>
                         <button  id="btn6" className="btn btn-success" onClick={this.props.next}>Next</button>
                </div>               
           
    </form>
    
            </div>
        )
    }
}
export default Register3;