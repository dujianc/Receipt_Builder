import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Receipt = props => (
  <tr>
    <td>{props.receipt.receiptName}</td>
    <td>{props.receipt.description}</td>
    <td>{props.receipt.product}</td>
    <td>{props.receipt.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.receipt._id}>edit</Link> | <a href="#" onClick={() => { props.deleteReceipt(props.receipt._id) }}>delete</a>
    </td>
  </tr>
)

export default class ReceiptList extends Component {
  constructor(props) {
    super(props);

    this.deleteReceipt = this.deleteReceipt.bind(this)

    this.state = {receipts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/receipt/')
      .then(response => {
        this.setState({ receipts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteReceipt(id) {
    axios.delete('http://localhost:5000/receipt/'+id)
      .then(response => console.log(response.data));

    this.setState({
      receipts: this.state.receipts.filter(el => el._id !== id)
    })
  }

  receiptList() {
    return this.state.receipts.map(currentreceipt => {
      return <Receipt receipt={currentreceipt} deleteReceipt={this.deleteReceipt} key={currentreceipt._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Receipts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ReceiptName</th>
              <th>Description</th>
              <th>Product</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.receiptList() }
          </tbody>
        </table>
      </div>
    )
  }
}