import { connect } from 'react-redux';

import { Me } from '../components';
import { fetch } from '../state/actions/me';
import { meSelector } from '../state/selectors/me';

const mapStateToProps = state => ({ me: meSelector(state) });

export default connect(mapStateToProps, { fetch: fetch.start })(Me);
