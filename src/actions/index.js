import { SIGNED_IN, SET_IDEAS, SET_COMPLETED } from '../constants';

// Action creators

// -> Signed In
export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

// -> Set idea
export function setIdeas(ideas) {
  const action = {
    type: SET_IDEAS,
    ideas
  }
  return action;
}

// -> Complete ideas
export function setCompleted(completeIdeas) {
  const action = {
    type: SET_COMPLETED,
    completeIdeas
  }
  return action;
}