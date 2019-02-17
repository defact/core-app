import { connect } from 'react-redux';

import { Me } from '../components';
import { fetchMe } from '../actions/me';

export default connect(state => ({ ...state.user.me }), { handleFetchMe: fetchMe })(Me);
