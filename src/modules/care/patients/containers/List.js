import { connect } from 'react-redux';

import { List } from '../components';
import { save, remove } from '../state/actions/profiles';
import { profilesSelector } from '../state/selectors/profiles';

const mapStateToProps = state => ({ 
  profiles: profilesSelector(state),
});

export default connect(mapStateToProps, { save: save.start, remove: remove.start })(List);
