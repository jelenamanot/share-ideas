import React from 'react';
import ReactDOM from 'react-dom';

// Redux related imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { logUser } from './actions';

// Router related imports
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Firebase related import
import { firebaseApp } from './firebase';

// Components related imports
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createHistory();
const store = createStore(reducer);

// ---- firebase main ----
firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/');
  }
  else {
    console.log('user has to sign in, or has signed out');
    history.replace('/signin');
  }
})


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));