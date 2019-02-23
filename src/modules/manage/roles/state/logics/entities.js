import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/entities';

const onFetch = createLogic({
  type: FETCH,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_SUCCESS,
    failType: FETCH_FAILED
  },

  process({ api, normalize, schemas }) {
    return api().get('entities').then(data => {
      return normalize(data.entities, [ schemas.entity ]);
    });;
  }
});

export default onFetch;