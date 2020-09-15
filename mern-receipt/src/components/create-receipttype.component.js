import React, { Component } from 'react';
import axios from 'axios';

export default class CreateReceiptType extends Component {
  constructor(props) {
    super(props);

    this.onChangeReceiptname = this.onChangeReceiptname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      receiptName: ''
    }
  }

  onChangeReceiptname(e) {
    this.setState({
      receiptName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const receiptTypes = {
        receiptName: this.state.receiptName
    }

    console.log(receiptTypes);

    axios.post('http://localhost:5000/receiptType/add', receiptTypes)
      .then(res => console.log(res.data));

    this.setState({
        receiptName: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Receipt Type</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Receipt Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.receiptName}
                onChange={this.onChangeReceiptname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Receipt Type" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}