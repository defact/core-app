import { connect } from 'react-redux';

import { Users } from '../components';
import { fetch } from '../state/actions/users';

import { profileSelector } from '../../../state/selectors/profiles';
import { profileUsersSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  users: profileUsersSelector(state, props),
});

export default connect(mapStateToProps, { fetch: fetch.start })(Users);
