import { createLogic } from 'redux-logic';
import { fetch } from '../actions/entities';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('entities').then(data => {
      return normalize(data.entities, [ schemas.entity ]);
    });;
  }
});

export default onFetch;