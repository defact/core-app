import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/photos';
import { info } from '../../../../../app/state/actions/flash';

import { profileSelector } from '../../../state/selectors/profiles';
import { photosSelector } from '../state/selectors/photos';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  ...photosSelector
});

export default connect(mapStateToProps, { add: add.start, info })(Add);
