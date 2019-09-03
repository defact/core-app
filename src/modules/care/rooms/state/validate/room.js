import { createValidator, isRequired } from '../../../../app/state/validator';

export default createValidator({
  name: [ 
    isRequired(), 
  ], 
});