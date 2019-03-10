import { connect } from 'react-redux';

import { Profile } from '../components';
import { save } from '../state/actions/profiles';
import { profileSelector } from '../state/selectors/profiles';

const mapStateToProps = (state, props) => profileSelector(state, props);

export default connect(mapStateToProps, { save: save.start })(Profile);
