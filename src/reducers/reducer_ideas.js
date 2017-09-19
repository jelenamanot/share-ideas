import { SET_IDEAS } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_IDEAS:
      const { ideas } = action;
      return ideas;
    default:
      return state;
  }
}