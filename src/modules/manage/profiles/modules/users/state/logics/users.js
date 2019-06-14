import { createLogic } from 'redux-logic';
import { fetch } from '../actions/users';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {  
    const { id } = action.payload;

    return api().get(`memberships/${id}/users`)
    .then(data => dispatch(fetch.success({ key: id, ...normalize(data.member.users, [ schemas.user ]) })))
    .catch(err => dispatch(fetch.failed(err)))
    .then(done);
  }
});

export default [ onFetch ];