import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/notes';
import { info } from '../../../../../app/state/actions/flash';

import { profileSelector } from '../../../state/selectors/profiles';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
});

export default connect(mapStateToProps, { add: add.start, info })(Add);
