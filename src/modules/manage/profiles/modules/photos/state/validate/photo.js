import memo from 'lru-memoize';
import { createValidator, isRequired } from '../../../../../../app/state/validator';

export default memo(10)(createValidator({
  caption: [ 
    isRequired(),
  ]
}));