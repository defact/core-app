import { connect } from 'react-redux';

import { Roles } from '../components';
import { fetch } from '../../roles/state/actions/roles';
import { save } from '../state/actions/roles';

import { userWithRolesSelector } from '../state/selectors/users';
import { rolesSelector } from '../../roles/state/selectors/roles';

const mapStateToProps = (state, props) => ({
  user: userWithRolesSelector(state, props),
  roles: rolesSelector(state),
});

export default connect(mapStateToProps, { fetch: fetch.start, save: save.start })(Roles);
