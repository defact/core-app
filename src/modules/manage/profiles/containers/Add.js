import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/profiles';

export default connect(null, { add: add.start })(Add);
