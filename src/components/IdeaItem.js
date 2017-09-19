import React from 'react';
import { connect } from 'react-redux';
import { completeIdeaRef, ideaRef } from '../firebase';
import '../styles/IdeaItem.css';

class IdeaItem extends React.Component {

  completeIdea() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.idea;
    ideaRef.child(serverKey).remove();
    completeIdeaRef.push({email,title});
  }

  render() {
    const { email, title } = this.props.idea;
    return(
      <div className="col-md-12">
        <p className="idea-title">{title}&nbsp;</p>
        <p className="idea-email">submitted by: <em>{email}</em></p>
        <button
          className="btn btn-sm btn-success"
          onClick={ () => this.completeIdea() }
        >
          Complete
        </button>
        <hr/>
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

export default connect(mapStateToProps, null)(IdeaItem);
