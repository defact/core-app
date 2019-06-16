import { createLogic } from 'redux-logic';
import { fetch } from '../actions/profiles';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {  
    const { id } = action.payload;

    return api().get(`memberships/${id}/profiles`)
    .then(data => dispatch(fetch.success({ key: id, ...normalize(data.member.profiles, [ schemas.profile ]) })))
    .catch(err => dispatch(fetch.failed(err)))
    .then(done);
  }
});

export default [ onFetch ];