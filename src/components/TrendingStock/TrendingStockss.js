import React,{Component} from 'react';
import axios from 'axios';

class ListOfStocks extends Component{
    constructor(props){
        super(props);
        this.state={
            trendingStock:[],
           
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ trendingStock: response.data });
        });
    
    
      }
      getData = () => {
       
       
        return new Promise((resolve, reject) => {
          axios.get('http://10.117.189.127:9090/trading/api/trending').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
  

          render(){
          return(
            <div>
           <div>
            <h5>Trending STOCK </h5>
            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">STOCK ID</th>
                        <th scope="col">STOCK NAME</th>
                        <th scope="col">COUNT</th>
                        

                       
    
                    </tr>
                </thead>
                    <tbody>
    
                        {this.state.trendingStock.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.stockId}</td>
                                    <td>{item.stockName}</td>
                                    <td>{item.count}</td>
                                    
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