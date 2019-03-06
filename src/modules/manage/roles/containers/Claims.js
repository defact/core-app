import { connect } from 'react-redux';

import { Claims } from '../components';
import { save } from '../state/actions/roles';

import { roleWithClaimsSelector } from '../state/selectors/roles';
import { entitiesSelector } from '../state/selectors/entities';
import { permissionsSelector } from '../state/selectors/permissions';

const mapStateToProps = (state, props) => ({
  role: roleWithClaimsSelector(state, props),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { save })(Claims);
