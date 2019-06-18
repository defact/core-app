import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/groups';
import { info } from '../../../app/state/actions/flash';

import { groupSelector } from '../state/selectors/groups';

const mapStateToProps = (state, props) => ({ 
  ...groupSelector(state, props),
});

export default connect(mapStateToProps, { add: add.start, info })(Add);
