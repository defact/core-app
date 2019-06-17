import { connect } from 'react-redux';

import { Register } from '../components';
import { register } from '../state/actions/register';

export default connect(state => ({ ...state.register }), { register: register.start })(Register);
