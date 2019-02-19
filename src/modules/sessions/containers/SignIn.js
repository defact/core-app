import { connect } from 'react-redux';

import { SignIn } from '../components';
import { signIn } from '../state/actions/signin';

const mapStateToProps = state => {
  const email = localStorage.getItem('email');
  return {
    ...state.sessions.signIn, 
    email,
    remember: email && email.length > 0,
  };
};

export default connect(mapStateToProps, { handleSignIn: signIn })(SignIn);
