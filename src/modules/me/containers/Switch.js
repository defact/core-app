import { connect } from 'react-redux';

import { Switch } from '../components';
// import { changePassword } from '../state/actions/password';
import { meSelector } from '../state/reducers/me';

const mapStateToProps = state => ({ me: meSelector(state) });
// const mapActionsToDispatch = { handleSwitchProfile: switchProfile, handle: newProfile };

export default connect(mapStateToProps, {})(Switch);
