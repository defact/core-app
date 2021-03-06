import { connect } from 'react-redux';

import { Group } from '../components';
import { groupSelector } from '../state/selectors/groups';
import { save, remove } from '../state/actions/groups';

const mapStateToProps = (state, props) => groupSelector(state, props);

export default connect(mapStateToProps, { save: save.start, remove: remove.start })(Group);
