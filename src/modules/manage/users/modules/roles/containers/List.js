import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/roles';

import { userWithRolesSelector } from '../../../state/selectors/users';
import { rolesSelector } from '../../../../roles/state/selectors/roles';

const mapStateToProps = (state, props) => ({
  user: userWithRolesSelector(state, props),
  roles: rolesSelector(state),
});

export default connect(mapStateToProps, { save: save.start })(List);
