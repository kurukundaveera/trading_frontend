
import React, { Component } from 'react'

import axios from 'axios';

import './Login.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData:{
                userName: '',
                password: '',

            }
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }

    handleChange = (event) => {
        const{ loginData }=this.state;
        loginData[event.target.name]=event.target.value;
        this.setState({loginData});

    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const { loginData } = this.state;
        this.props.validateUser(true);     
        axios.post('http://10.117.189.127:9090/trading/api/login',loginData).then((response)=>{
            console.log("login successfull");
            console.log(loginData.userName,loginData.password);
            localStorage.setItem("userId",response.data.userId);
            // this.props.history.push('/listOfStocks');
            window.location.replace('http://13.233.140.121:8888/build/#/listOfStocks')
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });

    }

    render() {

        return(
            <div>
          <div className="box">
              <h3 align="center" className="h1">USER LOGIN</h3>
              <table align="center" className="table table- striped">
                  <tbody>
              <tr>
                    {/* <td>{t('student Id')}:</td> */}
                    <td>USER NAME:</td>
                    <td><input type="text"  placeholder="Enter the  User Name"  id="userName" name="userName" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    {/* <td>{t('password')}:</td> */}
                    <td>PASSWORD :</td>
                    <td><input type="password"  placeholder="enter the password"  id="password" name="password" required="yes" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td><button   className="btn btn-primary bbb" id="btn1" onClick={this.handleLoginSubmit}>Login</button></td>
                    <td><button className="btn btn-primary " id="btn2" type="reset"  value="cancel" onClick={this.cancel}>Cancel</button></td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
        )

    }

}

 

// export default withRouter(withTranslation()(Login));

 

export default Login
