import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

export default class TrendindStock extends PureComponent {
    constructor() {
        super()
        this.state  = {
            trendingStockList : []
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ trendingStockList: response.data });
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
  debugger; 
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.trendingStockList}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stockName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="stockId" fill="#8884d8" />
      </BarChart>
    );
  }
}