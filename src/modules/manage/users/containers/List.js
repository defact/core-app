import { connect } from 'react-redux';

import { List } from '../components';
import { save, lock } from '../state/actions/users';
import { usersSelector } from '../state/selectors/users';

const mapStateToProps = state => ({ 
  users: usersSelector(state),
});

export default connect(mapStateToProps, { save: save.start, lock: lock.start })(List);
