import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/permissions';

const onFetch = createLogic({
  type: FETCH,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_SUCCESS,
    failType: FETCH_FAILED
  },

  process({ api, normalize, schemas }) {
    return api().get('permissions').then(data => {
      return normalize(data.permissions, [ schemas.permission ]);
    });;
  }
});

export default onFetch;