import { connect } from 'react-redux';

import { Password } from '../components';
import { password } from '../state/actions/users';

import { userSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props),
});

export default connect(mapStateToProps, { save: password.start })(Password);
