import { connect } from 'react-redux';

import { User } from '../components';
import { save } from '../state/actions/users';
import { userSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => userSelector(state, props);

export default connect(mapStateToProps, { save: save.start })(User);
