import { connect } from 'react-redux';

import { Reset } from '../components';
import { reset } from '../state/actions/reset';

const mapStateToProps = state => {
  const email = localStorage.getItem('email');
  return {
    ...state.sessions.reset,
    email,
  };
};

export default connect(mapStateToProps, { reset: reset.start })(Reset);
