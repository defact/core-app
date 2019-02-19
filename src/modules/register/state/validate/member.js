import memo from 'lru-memoize';
import { createValidator, isRequired, isEmail } from '../../../app/state/validator';

export default memo(10)(createValidator({
  email: [ 
    isRequired(), 
    isEmail(), 
  ], 
  name: [ 
    isRequired(),
  ], 
  password: [ 
    isRequired(),
  ]
}));