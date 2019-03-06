import { connect } from 'react-redux';

import { Password } from '../components';
import { change } from '../state/actions/password';
import { meSelector } from '../state/selectors/me';

const mapStateToProps = state => ({ ...state.me.password, me: meSelector(state) });

export default connect(mapStateToProps, { change })(Password);
