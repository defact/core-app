import { connect } from 'react-redux';

import { Contact } from '../components';
import { send } from '../state/actions/contact';

export default connect(state => ({ contact: state.contact.contact }), { send })(Contact);
