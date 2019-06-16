import { connect } from 'react-redux';

import { Contact } from '../components';
import { add } from '../state/actions/contacts';

import { profileSelector } from '../../../state/selectors/profiles';
import { profileContactSelector } from '../state/selectors/contacts';
import { classifiersSelector } from '../state/selectors/classifiers';

const mapStateToProps = (state, props) => ({
  profile: profileSelector(state, props),
  contact: profileContactSelector(state, props),
  classifiers: classifiersSelector(state),
});

export default connect(mapStateToProps, { add: add.start })(Contact);
