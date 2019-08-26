import React,{Component} from 'react';
import axios from 'axios';

class ListOfStocks extends Component{
    constructor(props){
        super(props);
        this.state={
            listOfStock:[],
            buy:{
                stockQuantity:'',

            }
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ listOfStock: response.data });
        });
    
    
      }
      getData = () => {
       
       
        return new Promise((resolve, reject) => {
          axios.get('http://10.117.189.174:9090/trading/api/getAllStocks').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
    handleBuy=(item)=>{
        localStorage.setItem("stockId",item.stockId);
        this.props.history.push('/buyStock');

    }

          render(){
          return(
            <div>
           <div>
            <h5>List of stocks</h5>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STOCK ID</th>
                        <th scope="col">STOCK NAME</th>
                        <th scope="col">STOCK EXCHANGE NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">BROKERAGE AMOUNT</th>
                        <th scope="col">ACTION</th>

                       
    
                    </tr>
                </thead>
                    <tbody>
    
                        {this.state.listOfStock.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.stockId}</td>
                                    <td>{item.stockName}</td>
                                    <td>{item.stockExchangeName}</td>
                                    <td>{item.availableQuantity}</td>
                                    <td>{item.stockPrice}</td>
                                    <td>{item.brokerageAmount}</td>
                                    <td>
                                        <button id="btn3" className="btn btn-outline-primary" onClick={()=>this.handleBuy(item)}  data-target="#myModal" >BUY</button>
                                    </td>
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
export default ListOfStocks;