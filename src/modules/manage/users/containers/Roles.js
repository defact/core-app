import { connect } from 'react-redux';

import { Roles } from '../components';
import { fetch } from '../../roles/state/actions/roles';
import { save } from '../state/actions/roles';

import { userWithRolesSelector } from '../state/reducers/users';
import { rolesSelector } from '../../roles/state/reducers/roles';

const mapStateToProps = (state, props) => ({
  user: userWithRolesSelector(state, props),
  roles: rolesSelector(state),
});

export default connect(mapStateToProps, { fetch, save })(Roles);