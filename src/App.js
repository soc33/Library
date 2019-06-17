import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2 className="display-4">
            Welcome to the Kids Library
        </h2>
        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="#" role="button">Check the Library</a>    
        <a className="btn btn-secondary btn-lg" href="#" role="button">Add a book</a>
        </div>
      </div>
    );
  }
}

export default App;
