import { connect } from 'react-redux';

import { Role } from '../components';
import { roleSelector } from '../state/selectors/roles';
import { save, remove } from '../state/actions/roles';

const mapStateToProps = (state, props) => roleSelector(state, props);

export default connect(mapStateToProps, { save: save.start, remove: remove.start })(Role);
