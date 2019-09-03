import { createLogic } from 'redux-logic';
import { fetch } from '../actions/classifiers';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('contact-classifiers').then(data => {
      return normalize(data.classifiers, [ schemas.classifier ]);
    });;
  }
});

export default onFetch;