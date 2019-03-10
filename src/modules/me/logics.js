import me from './state/logics/me';
import password from './state/logics/password';
import verification from './state/logics/verification';

export default [ ...me, ...password, ...verification ];