import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

import Header from './Header';
import AddIdea from './AddIdea';
import '../styles/AppStyle.css';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App container text-center">
        <Header />
        <AddIdea />
        <p>Components to create:</p>
        <p>Idea List</p>
        <p>Completed ideas</p>
        <hr />
        <button 
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default App;
