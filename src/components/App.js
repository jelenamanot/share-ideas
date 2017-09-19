import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

import Header from './Header';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';
import CompleteIdeaList from './CompleteIdeaList';

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
        <IdeaList />
        <CompleteIdeaList />
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
