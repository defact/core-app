import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/roles';
import { rolesSelector } from '../state/reducers/roles';
import { entitiesSelector } from '../state/reducers/entities';
import { permissionsSelector } from '../state/reducers/permissions';

const mapStateToProps = state => ({ 
  roles: rolesSelector(state),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { save })(List);
