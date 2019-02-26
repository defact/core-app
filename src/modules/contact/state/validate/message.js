import { createValidator, isRequired, isEmail } from '../../../app/state/validator';

export default createValidator({
  from: [ 
    isRequired(), 
    isEmail(), 
  ], 
  message: [ 
    isRequired(),
  ], 
});