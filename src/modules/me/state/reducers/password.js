import { handleActions } from 'redux-actions';
import { changePassword, changePasswordSuccess, changePasswordFailed } from '../actions/password';

const initialState = {
  isChanging: false,
  hasChanged: false,
  error: false,
};

export default handleActions({
  [changePassword]: (state) => ({ ...state, isChanging: true, hasChanged: false, error: false }),
  [changePasswordSuccess]: (state) =>
    ({ ...state, isChanging: false, hasChanged: true, error: false }),
  [changePasswordFailed]: (state, action) => 
    ({ ...state, isChanging: false, hasChanged: false, error: { message: action.payload.message }}),
  }, initialState);