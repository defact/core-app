import { connect } from 'react-redux';

import { List } from '../components';
import { fetch, remove } from '../state/actions/contacts';

import { profileSelector } from '../../../state/selectors/profiles';
import { profileContactsSelector, contactsSelector } from '../state/selectors/contacts';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  data: profileContactsSelector(state, props),
  contacts: contactsSelector(state),
});

export default connect(mapStateToProps, { fetch: fetch.start, remove: remove.start })(List);
