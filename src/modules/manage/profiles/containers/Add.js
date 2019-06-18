import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/profiles';
import { info } from '../../../app/state/actions/flash';

import { profileSelector } from '../state/selectors/profiles';

const mapStateToProps = (state, props) => ({ 
  ...profileSelector(state, props),
});

export default connect(mapStateToProps, { add: add.start, info })(Add);
