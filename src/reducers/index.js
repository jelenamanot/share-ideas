import { combineReducers } from 'redux';
import user from './reducer_user';
import ideas from './reducer_ideas';
import completeIdeas from './reducer_completed_ideas';

export default combineReducers({
  user,
  ideas,
  completeIdeas
});