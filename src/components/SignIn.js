import React from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../firebase';

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
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error})
      });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Sign In</h1>
        <div className="form-inline row">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              style={{
              marginRight: '5px'
            }}
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}/>
            <input
              className="form-control"
              type="text"
              style={{
              marginRight: '5px'
            }}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}/>
            <button className="btn btn-primary" onClick={() => this.signIn()}>
              Sign In
            </button>
          </div>
          </div>
          <div className="row">
          <p>{this.state.error.message}</p>
          <p>
            <Link to={'/signup'}>You don't have an account? Sign Up instead</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;