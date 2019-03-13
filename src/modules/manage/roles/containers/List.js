import { connect } from 'react-redux';

import { List } from '../components';
import { save, remove } from '../state/actions/roles';
import { rolesSelector } from '../state/selectors/roles';

const mapStateToProps = state => ({ 
  roles: rolesSelector(state),
});

export default connect(mapStateToProps, { save: save.start, remove: remove.start })(List);
