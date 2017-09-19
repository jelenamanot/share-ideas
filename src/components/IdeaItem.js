import React from 'react';
import { connect } from 'react-redux';
import '../styles/IdeaItem.css';

class IdeaItem extends React.Component {
  render() {
    const { email, title } = this.props.idea;
    return(
      <div className="col-md-12">
        <p className="idea-title">{title}&nbsp;</p>
        <p className="idea-email">submitted by: <em>{email}</em></p>
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
