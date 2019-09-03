import { createLogic } from 'redux-logic';
import { fetch } from '../actions/rooms';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().get('rooms')
    
    .then(data => dispatch(fetch.success(data)))
    .then(done)

    .catch(err => {
      dispatch(fetch.failed(err));
    });
  }
});

export default onFetch;