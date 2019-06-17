import { connect } from 'react-redux';

import { Contact } from '../components';
import { send } from '../state/actions/contact';
import { meSelector } from '../../me/state/selectors/me';

const mapStateToProps = state => ({ ...state.contact.contact, me: meSelector(state) });

export default connect(mapStateToProps, { send: send.start })(Contact);
