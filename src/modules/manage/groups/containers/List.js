import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/groups';
import { groupsSelector } from '../state/selectors/groups';

const mapStateToProps = state => ({ 
  groups: groupsSelector(state),
});

export default connect(mapStateToProps, { save: save.start })(List);
