import { connect } from 'react-redux';

import { Me } from '../components';
import { fetchMe } from '../state/actions/me';
import { meSelector } from '../state/reducers/me';

const mapStateToProps = state => ({ me: meSelector(state) });

export default connect(mapStateToProps, { handleFetchMe: fetchMe })(Me);
