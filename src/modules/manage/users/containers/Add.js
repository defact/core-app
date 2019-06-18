import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/users';
import { info } from '../../../app/state/actions/flash';

import { userSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => ({ 
  ...userSelector(state, props),
});

export default connect(mapStateToProps, { add: add.start, info })(Add);
