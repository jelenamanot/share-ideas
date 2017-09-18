import React from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../firebase';
import Header from './Header';

class SignUp extends React.Component {

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

  signUp() {
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error})
      });
  }

  render() {
    return (
      <div className="container text-center">
        <Header/>
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
              style={{marginRight: '5px'}}
              placeholder="password"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.signUp()
                }
              }}
              onChange={event => this.setState({password: event.target.value})}
            />
            <button className="btn btn-primary" onClick={() => this.signUp()}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="row">
          <p>{this.state.error.message}</p>
          <p>
            <Link to={'/signin'}>Already a user? Then sign in</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;