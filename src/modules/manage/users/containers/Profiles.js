import { connect } from 'react-redux';

import { Profiles } from '../components';
import { fetch } from '../state/actions/profiles';

import { userSelector } from '../state/selectors/users';
import { userProfilesSelector } from '../state/selectors/profiles';

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props),
  profiles: userProfilesSelector(state, props),
});

export default connect(mapStateToProps, { fetch: fetch.start })(Profiles);
