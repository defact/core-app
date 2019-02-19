import { handleActions } from 'redux-actions';
import { register, registerSuccess, registerFailed } from '../actions/register';

const initialState = {
  isRegistering: false,
  error: false,
};

export default handleActions({
  [register]: (state) => ({ ...state, isRegistering: true, error: false }),
  [registerSuccess]: (state) => ({ ...state, isRegistering: false, error: false }),
  [registerFailed]: (state, action) => 
    ({ ...state, isRegistering: false, error: { message: action.payload.message }}),
}, initialState);