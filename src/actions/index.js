import { SIGNED_IN } from '../constants';

// Action creators

// -> Signed In
export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}