import React from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../firebase';
import Header from './Header';

import '../styles/SignInUpStyle.css';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error})
      });
  }

  render() {
    return (
      <div className="container text-center">
        <Header/>
        <div className="wrap-form">
          <div className="col-md-12">
            <input
              className="form-control idea-input"
              type="text"
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}/>
            <input
              className="form-control idea-input"
              type="text"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.signIn()
                }
              }}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}
            />
            <button className="btn btn-primary idea-btn" onClick={() => this.signIn()}>
              Sign In
            </button>
          </div>
        </div>
        <div className="wrap-form">
          <p className="warning">{this.state.error.message}</p>
          <p>
            <Link to={'/signup'}>You don't have an account? Sign Up instead</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;