import { connect } from 'react-redux';

import { Add } from '../components';
import { add } from '../state/actions/roles';
import { roleWithClaimsSelector } from '../state/selectors/roles';
import { entitiesSelector } from '../modules/claims/state/selectors/entities';
import { permissionsSelector } from '../modules/claims/state/selectors/permissions';

const mapStateToProps = (state, props) => ({ 
  ...roleWithClaimsSelector(state, props),
  entities: entitiesSelector(state),
  permissions: permissionsSelector(state),
});

export default connect(mapStateToProps, { add: add.start })(Add);
