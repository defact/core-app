import { createLogic } from 'redux-logic';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/register';

const onRegister = createLogic({
  type: REGISTER,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: REGISTER_SUCCESS,
    failType: REGISTER_FAILED
  },

  process({ api, _, action }) {
    return api().post('users', action.payload);
  }
});

export default onRegister;