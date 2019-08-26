import React,{Component} from 'react';
import axios from 'axios';

class BuyStock extends  Component{
    constructor(props){
    super(props);
    this.state={
        buy:{
            userId:localStorage.getItem("userId"),
            stockId:localStorage.getItem("stockId"),
            stockQuantity:'',
            status:'P'

        }
    }
}
handleChange = (event) => {
    const{ loginData }=this.state;
    loginData[event.target.name]=event.target.value;
    this.setState({loginData});

}
handleBuy=(e)=>{
    e.preventDefault();
        const { buy } = this.state;
        this.props.validateUser(true);     
        axios.post(' ',buy).then((response)=>{        
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
  }

render(){
    return(
        <div>
              <div className="otptablesize">
        <h4 align="center">order stock!</h4>
        <table className="table table-striped">
            
            <tbody>
                <tr>
                    <td><label>STOCK QUANTITY</label></td>
                    <td><input type="number" name="stockQuantity" id="stockQuantity"  placeholder="enter the quantity" required="yes" onChange={this.handleChange}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="btn5" className="btn btn-outline-primary" onClick={this.handleBuy} data-target="#myModal" >ORDER</button></td>
                </tr>
            </tbody>
        </table>
    </div>
      <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
            <div className="modal-header">
          <h4 className="modal-title">BUY STOCK</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div className="modal-body">
            <div>

            </div>
         
        </div>
        
       
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" onClick={this.handleOrder} data-dismiss="modal">Confirm order</button>
          <button type="button" className="btn btn-danger" onClick={this.handleOrdercancel} data-dismiss="modal">cancel</button>
        </div>
        
      </div>
    </div>
  </div>
  

        </div>
      
    )
}

}
export default BuyStock;