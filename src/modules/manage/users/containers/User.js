import { connect } from 'react-redux';

import { User } from '../components';
import { userSelector } from '../state/reducers/users';
import { save } from '../state/actions/users';

const mapStateToProps = (state, props) => userSelector(state, props);

export default connect(mapStateToProps, { save })(User);
