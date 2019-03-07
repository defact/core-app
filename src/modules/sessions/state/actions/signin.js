import { async, sync } from '../../../../state/actions';

export const signIn = async('sessions/signin');
export const verify = code => signIn(({ code, strategy: 'code' }))
