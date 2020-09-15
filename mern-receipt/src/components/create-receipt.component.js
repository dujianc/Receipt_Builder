import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateReceipt extends Component {
  constructor(props) {
    super(props);

    this.onChangeReceiptname = this.onChangeReceiptname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      receiptName: '',
      description: '',
      product: 0,
      date: new Date(),
      receiptTypes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/receiptType/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            receiptTypes: response.data.map(receiptType => receiptType.receiptName),
            receiptName: response.data[0].receiptName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeReceiptname(e) {
    this.setState({
      receiptName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeProduct(e) {
    this.setState({
      product: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const receipt = {
      receiptName: this.state.receiptName,
      description: this.state.description,
      product: this.state.product,
      date: this.state.date
    }

    console.log(receipt);

    axios.post('http://localhost:5000/receipt/add', receipt)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Receipt Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Receipt Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.receiptName}
              onChange={this.onChangeReceiptname}>
              {
                this.state.receiptTypes.map(function(rName) {
                  return <option 
                    key={rName}
                    value={rName}>{rName}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Product: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.product}
              onChange={this.onChangeProduct}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Receipt Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}