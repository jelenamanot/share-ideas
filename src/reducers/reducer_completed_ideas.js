import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      const { completeIdeas } = action;
      return completeIdeas;
    default:
      return state;
  }
}