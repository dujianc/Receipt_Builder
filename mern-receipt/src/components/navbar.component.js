import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ReceiptBuildrer</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Receipt Logs</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Receipt Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/receiptType" className="nav-link">Create Receipt Type</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}