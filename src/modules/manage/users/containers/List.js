import { connect } from 'react-redux';

import { List } from '../components';
import { save, lock, reset, remove, filter, page, sort } from '../state/actions/users';
import { usersSelector } from '../state/selectors/users';

const mapStateToProps = state => ({ 
  users: usersSelector(state),
});

const mapActions = ({
  save: save.start, 
  lock: lock.start,
  reset: reset.start,
  remove: remove.start,
  asc: sort.asc,
  desc: sort.desc,
  filter,
  page,
});

export default connect(mapStateToProps, mapActions)(List);
