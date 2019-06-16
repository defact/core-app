import { connect } from 'react-redux';

import { List } from '../components';

import { userSelector } from '../../../state/selectors/users';
import { profilesSelector, userProfilesSelector } from '../state/selectors/profiles';

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props),
  profiles: profilesSelector(state),
  data: userProfilesSelector(state, props),
});

export default connect(mapStateToProps)(List);
