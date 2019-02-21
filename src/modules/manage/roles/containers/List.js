import { connect } from 'react-redux';

import { List } from '../components';
import { fetch } from '../state/actions/roles';
// import { rolesSelector } from '../state/reducers/me';

const mapStateToProps = state => ({ roles: state.manage.roles.roles });

export default connect(mapStateToProps, { handleFetch: fetch })(List);
