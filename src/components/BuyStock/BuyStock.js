import React, { Component } from "react";
import axios from "axios";
import "./BuyStock.css";
import $ from "jquery";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class BuyStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: {},
      buy: {
        stockId: localStorage.getItem("stockId"),
        userId: localStorage.getItem("userId"),
        stockQuantity: "",
        stockStatus: "P"
      }
    };
  }

  handleChange = event => {
    const { buy } = this.state;
    buy[event.target.name] = event.target.value;
    this.setState({ buy });
  };
  handleBuy = e => {
    e.preventDefault();
    const { buy } = this.state;
    axios
      .post("http://10.117.189.127:9090/trading/api/order", buy)
      .then(response => {
        localStorage.setItem("orderId",response.data.orderId);
        console.log(response.data.orderId);
        console.log(response);
        this.setState({ modal: !this.state.modal, modalData: response.data });

        // let confirm = window.confirm('Actual Stock Price : '+ response.data.actualStockPrice +' &  Current Price: '+response['data']['latestPrice']);
        // if(confirm) {

        //     console.log("confirmed")
        // } else {
        //         console.log("Cancelled")
        // }
      })
      .catch(error => {
        alert(error.message);
      });
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  buy = () => {
    this.setState({ modal: !this.state.modal });
      let order={
          orderId:localStorage.getItem("orderId"),
          stockstatus:'C'
      }
      axios.put('http://10.117.189.127:9090/trading/api/action',order).then((response)=>{   
            console.log(response);
            alert(response.data.message);
            this.props.history.push('/listOfOrders');
        }).catch((error)=>{
            console.log(error);
        });
   
 
  };
  cancel = () => {
    this.setState({ modal: !this.state.modal });
      let order={
          orderId:localStorage.getItem("orderId"),
          stockstatus:'R'
      }
      axios.put('http://10.117.189.127:9090/trading/api/action',order).then((response)=>{   
            console.log(response);
            alert(response.data.message);
            this.props.history.push('/listOfOrders');
        }).catch((error)=>{
            console.log(error);
        });
   
 
  };

  render() {
    return (
      <div>
        <div className="otptablesize">
          <h4 align="center">order stock!</h4>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <label>STOCK QUANTITY</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="stockQuantity"
                    id="stockQuantity"
                    placeholder="enter the quantity"
                    required="yes"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    id="btn5"
                    className="btn btn-outline-primary"
                    onClick={this.handleBuy}
                    data-toggle="modal"
                  >
                    ORDER
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <div>
                Actual Stock Price: {this.state.modalData.actualStockPrice}
              </div>
              <div>Latest Stock Price: {this.state.modalData.latestPrice}</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button  color="primary" onClick={this.buy}>
              Ok Buy
            </Button>{" "}
            <Button color="secondary" onClick={this.cancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default BuyStock;
