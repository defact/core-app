import { createValidator, isRequired, isEmail } from '../../../app/state/validator';

export default createValidator({
  email: [ 
    isRequired(), 
    isEmail(), 
  ], 
  text: [ 
    isRequired(),
  ], 
});