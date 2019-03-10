import { async } from '../../../../state/actions';

export const signIn = async('sessions/signin');
export const verify = code => signIn.start(({ code, strategy: 'code' }))
