import { connect } from 'react-redux';

import { List } from '../components';
import { fetchRoles } from '../state/actions/roles';
import { fetchEntities } from '../state/actions/entities';
import { fetchPermissions } from '../state/actions/permissions';
import { rolesSelector } from '../state/reducers/roles';
import { entitiesSelector } from '../state/reducers/entities';
import { permissionsSelector } from '../state/reducers/permissions';

const mapStateToProps = state => ({ 
  roles: rolesSelector(state),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { fetchRoles, fetchPermissions, fetchEntities })(List);
