import { connect } from 'react-redux';

import { List } from '../components';
import { fetch, remove } from '../state/actions/photos';

import { profileSelector } from '../../../state/selectors/profiles';
import { profilePhotosSelector, photosSelector } from '../state/selectors/photos';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  data: profilePhotosSelector(state, props),
  photos: photosSelector(state),
});

export default connect(mapStateToProps, { fetch: fetch.start, remove: remove.start })(List);
