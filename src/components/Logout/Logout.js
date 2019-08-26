import React,{Component} from 'react';

class Logout extends Component{

    render(){
        this.props.validateUser(false);
        return(
            <div>
                <h4 align="center"> your successfully logged out!!.</h4>
            </div>
        )
    }
}
export default Logout;