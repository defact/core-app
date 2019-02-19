import { connect } from 'react-redux';

import { Password } from '../components';
import { changePassword } from '../state/actions/password';
import { meSelector } from '../state/reducers/me';

const mapStateToProps = state => ({ ...state.me.password, me: meSelector(state) });

export default connect(mapStateToProps, { handleChangePassword: changePassword })(Password);
