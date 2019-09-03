import { connect } from 'react-redux';

import { Photo } from '../components';
import { save } from '../state/actions/photos';
import { info } from '../../../../../app/state/actions/flash';

import { profileSelector } from '../../../state/selectors/profiles';
import { profilePhotoSelector, photosSelector } from '../state/selectors/photos';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  photo: profilePhotoSelector(state, props),
  ...photosSelector
});

export default connect(mapStateToProps, { save: save.start, info })(Photo);
