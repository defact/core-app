import { connect } from 'react-redux';

import { List } from '../components';

import { profileSelector } from '../../../state/selectors/profiles';
import { usersSelector, profileUsersSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  users: usersSelector(state),
  data: profileUsersSelector(state, props),
});

export default connect(mapStateToProps)(List);
