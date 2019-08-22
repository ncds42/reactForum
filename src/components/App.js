// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Customers from './customers/Customers.js';
import PostRow from './postRows/PostRow.js';

class App extends Component {
  render() {
    return (
      <div>
        <PostRow />
      </div>
    );
  }
}

export default App;
