import { createLogic } from 'redux-logic';
import { save } from '../actions/roles';

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { user, role, onSuccess, onFailure } = action.payload;

    const request = role.has
      ? api().post(`users/${user.id}/roles`, { id: role.id })
      : api().delete(`users/${user.id}/roles/${role.id}`);
    
    return request
    .then(data => normalize(data.user, schemas.user))
    .then(onSuccess)
    .catch(onFailure)
    .then(done);
  }
});

export default [ onSave ];