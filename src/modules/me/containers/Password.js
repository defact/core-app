import { connect } from 'react-redux';

import { Password } from '../components';
import { change } from '../state/actions/password';
import { info } from '../../app/state/actions/flash';

import { meSelector } from '../state/selectors/me';

const mapStateToProps = state => ({ ...state.me.password, me: meSelector(state) });

export default connect(mapStateToProps, { change: change.start, info })(Password);
