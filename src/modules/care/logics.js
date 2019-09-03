import patients from './patients/logics';
import rooms from './rooms/logics';
import notes from './notes/logics';

export default [ ...patients, ...rooms, ...notes ];