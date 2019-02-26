import { connect } from 'react-redux';

import { Contact } from '../components';
import { send } from '../state/actions/contact';
import { meSelector } from '../../me/state/reducers/me';

const mapStateToProps = state => ({ contact: state.contact.contact, me: meSelector(state) });

export default connect(mapStateToProps, { send })(Contact);
