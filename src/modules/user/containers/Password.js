import { connect } from 'react-redux';

import { Password } from '../components';
import { changePassword } from '../actions/password';

export default connect(state => 
  ({ ...state.user.password, me: state.user.me }), { handleChangePassword: changePassword })(Password);
