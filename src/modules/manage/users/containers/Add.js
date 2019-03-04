import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/users';

export default connect(null, { add })(Add);
