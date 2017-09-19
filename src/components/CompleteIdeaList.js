import React from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeIdeaRef } from '../firebase';

class CompleteIdeaList extends React.Component {
  
  componentDidMount() {
    completeIdeaRef.on('value', snap => {
      let completeIdeas = [];
      snap.forEach(completeIdea => {
        const { email, title } = completeIdea.val();
        completeIdeas.push({email, title});
      });
      this.props.setCompleted(completeIdeas);
    })
  }

  //clear completed
  clearCompleted() {
    completeIdeaRef.set([]);
  }

  render() {
    return(
      <div className="CompleteIdeaList">
        <h2>Completed Ideas</h2><hr/>
      {
        this.props.completeIdeas.map((completeIdea, index) => {
          const {title, email} = completeIdea;
          return(
            <div key={index}>
              <p className="idea-title">{title}&nbsp;</p>
              <p className="idea-email">completed by: <em>{email}</em></p>
              <hr/>
            </div>
          );
        })
      }
      <button
        className="btn btn-primary"
        onClick={() => this.clearCompleted() }
      >
        Clear All
      </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completeIdeas } = state;
  return {
    completeIdeas
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteIdeaList);