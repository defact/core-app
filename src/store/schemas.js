import me from '../modules/me/state/schemas';
import manage from '../modules/manage/schemas';
import care from '../modules/care/schemas';

export default { ...me, ...manage, ...care };