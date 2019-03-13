import { connect } from 'react-redux';

import { User } from '../components';
import { save, reset, remove } from '../state/actions/users';
import { userSelector } from '../state/selectors/users';

const mapStateToProps = (state, props) => userSelector(state, props);

const mapActions = ({ 
  save: save.start, 
  reset: reset.start,
  remove: remove.start,
});

export default connect(mapStateToProps, mapActions)(User);
