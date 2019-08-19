import { connect } from 'react-redux';

import { List } from '../components';
import { fetch, remove } from '../state/actions/notes';

import { profileSelector } from '../../../state/selectors/profiles';
import { profileNotesSelector, notesSelector } from '../state/selectors/notes';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  data: profileNotesSelector(state, props),
  notes: notesSelector(state),
});

export default connect(mapStateToProps, { fetch: fetch.start, remove: remove.start })(List);
