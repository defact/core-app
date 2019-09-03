import { connect } from 'react-redux';

import { List } from '../components';
import { notesSelector } from '../state/selectors/notes';

const mapStateToProps = state => ({ 
  notes: notesSelector(state),
});

export default connect(mapStateToProps)(List);
