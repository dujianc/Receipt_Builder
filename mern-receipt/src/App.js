import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ReceiptList from "./components/receipt-list.component";
import EditReceipt from "./components/edit-receipt.component";
import CreateReceipt from "./components/create-receipt.component";
import CreateReceiptType from "./components/create-receipttype.component";

function App() {
  return (
   <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ReceiptList} />
      <Route path="/edit/:id" component={EditReceipt} />
      <Route path="/create" component={CreateReceipt} />
      <Route path="/receiptType" component={CreateReceiptType} />
      </div>
   </Router>
  );
}

export default App;
