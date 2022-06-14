import { getDomainForEnvironment, getIsSecureCookieURL } from './urls';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import type { IronSessionOptions } from 'iron-session';

const sharedOptions: IronSessionOptions = {
  password: process.env.SESSION_SECRET_CURRENT || 'secret_secret_secret_secret_secret_secret',
  cookieName: 'amie:session',
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    sameSite: 'lax',
    secure: getIsSecureCookieURL(),
    domain: getDomainForEnvironment(),
  },
};

/**
 * For use with /api/ routes in Next.js
 */
export function withSessionApi(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sharedOptions);
}

/**
 * For use with `getServerSideProps` in Next.js
 */
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sharedOptions);
}
