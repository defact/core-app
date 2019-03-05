import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/roles';
import { roleWithClaimsSelector } from '../state/reducers/roles';
import { entitiesSelector } from '../state/reducers/entities';
import { permissionsSelector } from '../state/reducers/permissions';

const mapStateToProps = (state, props) => ({ 
  ...roleWithClaimsSelector(state, props),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { add })(Add);
