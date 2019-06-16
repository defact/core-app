import { createLogic } from 'redux-logic';
import { save } from '../actions/roles';

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { user, role } = action.payload;

    const request = role.has
      ? api().delete(`users/${user.id}/roles/${role.id}`)
      : api().post(`users/${user.id}/roles`, { id: role.id });
    
    return request
    .then(data => dispatch(save.success(normalize(data.user, schemas.user))))
    .then(done);
  }
});

export default [ onSave ];