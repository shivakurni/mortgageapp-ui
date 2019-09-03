import React,{Component} from 'react';
import axios from 'axios';
class DetailsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            mortgageDetails:[] ,
            loginId: localStorage.getItem("loginId"),
            password: localStorage.getItem("password"),
            mortgageAccountNumber: localStorage.getItem("mortgageAccountNumber"),
            transactionAccountNumber: localStorage.getItem("transactionAccountNumber")
        }
    }
    // componentDidMount() {
     
       

    //   }
     
    //   onClickLogin=()=>{
    //       // this.props.history.push('/login');
    //   }
    
      render(){
        return(
            <div>
                
                <div className="tab">
                <table align="center" border="1px">
                <h4 align="center">congratulations , your mortgage has been created</h4>
                <hr/>
                  <thead>
                    <tr>
                      <td>Login Id</td>
                      <td>Password</td>
                      <td>Transaction Account Number</td>
                      <td>Mortgage Account Number</td>
                    </tr>
                  </thead>
                  <tbody>

                


                {this.state.mortgageDetails.map((item,j)=>{
                    return(
                        <tr key={j}>
                        <td className="de"><b>Login Id:</b>{item.customerId} </td>
                        <td className="de"><b></b>{this.state.password}</td>

                        <td className="de"> <b>Transaction Account Number</b>{item.transactionAccountNumber}</td>
                        <td className="de"><b>Mortgage Account Number</b>{item.mortgageAccountNumber}</td>
                        </tr>
                    )
                })}
                        </tbody>       
                     </table>
                     </div>
                     <button type="button" id="btn9" className="btn btn-primary outlined" onClick={this.onClickLogin}>Login</button>
                    
                </div>
        )
    }
}
export default DetailsPage;