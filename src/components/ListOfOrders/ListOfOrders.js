import React,{Component} from 'react';
import axios from 'axios';

class ListOfOrders extends Component{
    constructor(props){
        super(props);
        this.state={
            stock:[]
          
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ stock: response.data });
        });
    
    
      }
      getData = () => {
       
       
        return new Promise((resolve, reject) => {
            var userId=localStorage.getItem("userId");
          axios.get('http://10.117.189.127:9090/trading/api/orders/'+userId).then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      handleListOfStock=()=>{

        this.props.history.push('/listOfStocks');
      }
    

          render(){
          return(
            <div>
              <button className="btn btn-outline-primary" onClick={this.handleListOfStock}>List of stocks</button>
           <div>
            <h5>Cancelled or executed List of stocks</h5>
            
            <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="col">STOCK NAME</th>
                        <th scope="col">STOCK EXCHANGE NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">CREATION DATE</th>
                        <th scope="col">SETTLEMENT DATE</th>
                        <th scope="col">STATUS</th>

                       
    
                    </tr>
                </thead>
                    <tbody>
    
                        {this.state.stock.map((item,i)=>{
                            return(
                                <tr key={i}>
                                 
                                    <td>{item.stockName}</td>
                                    <td>{item.stockExchangeName}</td>
                                    <td>{item.stockQuantity}</td>
                                    <td>{item.totalPrice}</td>
                                    <td>{item.creationDate}</td>
                                    <td>{item.settlementDate}</td>
                                    <td>{item.stockStatus}</td>
                                
                                    </tr>
                             )
    
                         })}
    
                     </tbody>
                </table>
                
        </div>
      

        </div>
    
          )
      }
}
export default ListOfOrders;