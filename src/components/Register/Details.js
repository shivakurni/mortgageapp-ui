import React,{Component} from 'react';
import axios from 'axios';
class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            mortgageDetails:[]            
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
          this.setState({ mortgageDetails: response.data });     
        });

      }
      getData = () => {  
        return new Promise((resolve, reject) => {
          axios.get('  http://localhost:4000/mortgageDetails').then((response)=> {
            resolve(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }

      onClickLogin=()=>{
          // this.props.history.push('/login');
      }
    
      render(){
        return(
            <div>
                
                <div className="tab">
                <table align="center" border="1px">
                <h4 align="center">congratulations , your mortgage has been created</h4>
                <hr/>
                  <thead>
                    <tr>
                      <td>Customer Id</td>
                      <td>Password</td>
                      <td>Account Number</td>
                      <td>Mortgage Account Number</td>
                    </tr>
                  </thead>
                  <tbody>

                


                {this.state.mortgageDetails.map((item,j)=>{
                    return(
                        <tr key={j}>
                        <td className="de"><b>customer Id:</b>{item.customerId} </td>
                        <td className="de"><b> password:</b>{item.password} </td>
                        <td className="de"> <b>Account number:</b>{item.accountNo}</td>
                        <td className="de"><b>mortgage number:</b>{item.mortgageNo}</td>
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
export default Details;