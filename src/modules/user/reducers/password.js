import { handleActions } from 'redux-actions';
import { changePassword, changePasswordSuccess, changePasswordFailed } from '../actions/password';

const initialState = {
  isChanging: false,
  error: false,
};

export default handleActions({
  [changePassword]: (state) => ({ ...state, isChanging: true, error: false }),
  [changePasswordSuccess]: (state) =>
    ({ ...state, isChanging: false, error: false }),
  [changePasswordFailed]: (state, action) => ({ ...state, isChanging: false, error: { message: action.payload.message }}),
  }, initialState);