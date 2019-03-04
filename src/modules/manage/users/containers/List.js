import { connect } from 'react-redux';

import { List } from '../components';
import { save, lock } from '../state/actions/users';
import { usersSelector } from '../state/reducers/users';

const mapStateToProps = state => ({ 
  users: usersSelector(state),
});

export default connect(mapStateToProps, { save, lock })(List);
