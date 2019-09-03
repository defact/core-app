import { createLogic } from 'redux-logic';
import { fetch } from '../actions/notes';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().get('notes')
    
    .then(data => dispatch(fetch.success(data)))
    .then(done)

    .catch(err => {
      dispatch(fetch.failed(err));
    });
  }
});

export default onFetch;