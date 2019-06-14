import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/contacts';

import { profileSelector } from '../../../state/selectors/profiles';
import { classifiersSelector } from '../state/selectors/classifiers';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  classifiers: classifiersSelector(state),
});

export default connect(mapStateToProps, { add: add.start })(Add);
