import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/roles';
import { rolesSelector } from '../state/reducers/roles';

const mapStateToProps = state => ({ 
  roles: rolesSelector(state),
});

export default connect(mapStateToProps, { save })(List);
