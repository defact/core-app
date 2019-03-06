import { connect } from 'react-redux';

import { Switch } from '../components';
import { meSelector } from '../state/selectors/me';

const mapStateToProps = state => ({ me: meSelector(state) });

export default connect(mapStateToProps, {})(Switch);
