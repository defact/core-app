import { connect } from 'react-redux';

import { List } from '../components';
import { roomsSelector } from '../state/selectors/rooms';

const mapStateToProps = state => ({ 
  rooms: roomsSelector(state),
});

export default connect(mapStateToProps)(List);
