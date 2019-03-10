import { connect } from 'react-redux';

import { List } from '../components';
import { save } from '../state/actions/profiles';
import { profilesSelector } from '../state/selectors/profiles';

const mapStateToProps = state => ({ 
  profiles: profilesSelector(state),
});

export default connect(mapStateToProps, { save: save.start })(List);
