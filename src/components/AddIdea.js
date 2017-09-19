import React from 'react';
import { connect } from 'react-redux';
import { ideaRef } from '../firebase';

class AddIdea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addIdea() {
    const { title } = this.state;
    const { email } = this.props.user;
    ideaRef.push({email, title});
  }

  render() {
    return(
    <div className="row text-center wrap-form">
      <div className="col-md-12">
        <div className="form-group">
        <p>You are logged in as: {this.props.user.email}</p>
          <input 
            className="form-control idea-input"
            type="text"
            placeholder="Add an idea"
            onChange={event=> this.setState({title:event.target.value})}
          />
          <button
            className="btn btn-success idea-btn"
            type="button"
            onClick={() => this.addIdea()}
          >
            Submit
          </button>
       </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddIdea);