import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/roles';
import { rolesWithClaimsSelector } from '../state/reducers/roles';
import { entitiesSelector } from '../state/reducers/entities';
import { permissionsSelector } from '../state/reducers/permissions';

const mapStateToProps = state => ({ 
  roles: rolesWithClaimsSelector(state),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { save })(List);
