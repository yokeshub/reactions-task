import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./auth/auth.reducer";
import reactionReducer from "./reaction/reaction.reducer";
export default combineReducers({
  form: formReducer,
  reactions: reactionReducer,
  auth: authReducer
});
