import { createLogic } from 'redux-logic';
import { fetch } from '../actions/permissions';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('permissions').then(data => {
      return normalize(data.permissions, [ schemas.permission ]);
    });;
  }
});

export default onFetch;