import React , {Component} from 'react';


import './App.css';



import { HashRouter, Switch, Route } from 'react-router-dom'



import Header from './components/Header/Header';


import Login from './components/Login/Login';

import Logout from './components/Logout/Logout';
import ListOfStocks from './components/ListOfStocks/ListOfStocks';
import BuyStock from './components/BuyStock/BuyStock';



 

class App extends Component {

  constructor(props) {

    super(props);
    this.state={

      isLoggedIn: false,

      data:{}

    }

  }

  redirect=(page, history)=> {

    history.push(page);

  }

 

  validateUser = (isLoggedIn)=> {

    this.setState({isLoggedIn});

  }

  getuserData =(data,props)=>{

    this.setState({data});

    console.log(data);

  }

 

 

  render(){

    return (

      <div className="App"> 

        <HashRouter>

        <Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/>

          <Switch>

          <Route path='/' component={()=><Login validateUser={this.validateUser}/>} exact></Route>
          <Route path='/listOfStocks' exact component={ListOfStocks} ></Route>

          <Route path='/logout' component={Logout} />

          <Route path='/login' component={()=><Login validateUser={this.validateUser}/>}></Route>
          <Route path="/buyStock" component={BuyStock}/>

          </Switch>

        

        </HashRouter>

      </div>

    );

 

  }

 

}

 

export default App;