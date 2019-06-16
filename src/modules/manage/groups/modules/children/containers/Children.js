import { connect } from 'react-redux';

import { Children } from '../components';

import { groupSelector } from '../../../state/selectors/groups';

const mapStateToProps = (state, props) => ({
  group: groupSelector(state, props),
});

export default connect(mapStateToProps)(Children);
