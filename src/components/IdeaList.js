import React from 'react';
import { connect } from 'react-redux';
import { ideaRef } from '../firebase';
import { setIdeas } from '../actions';

import IdeaItem from './IdeaItem';

class IdeaList extends React.Component {

  componentDidMount() {
    ideaRef.on('value', snap => {
      let ideas = [];
      snap.forEach(idea => {
        const { email, title } = idea.val();
        const serverKey = idea.key;
        ideas.push({email, title, serverKey});
      });
      this.props.setIdeas(ideas);
    })
  }

  render() {
    return(
      <div className="IdeaList">
      <h2>Idea List</h2>
      <hr/>
      {
        this.props.ideas.map((idea, index) => {
          return(
            <IdeaItem key={index} idea={idea} />
          );
        })
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ideas } = state;
  return {
    ideas
  }
}

export default connect(mapStateToProps, {setIdeas})(IdeaList);