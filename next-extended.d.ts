import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import type { IronSession } from 'iron-session';
import type { IncomingMessage } from 'http';
import type { Credentials } from 'google-auth-library';

import 'next';
declare module 'next' {
  interface NextApiRequestExtended extends NextApiRequest {
    session: IronSession;
  }

  interface EnhancedIncomingMessage extends IncomingMessage {
    session: IronSession;
  }
}

declare module 'iron-session' {
  interface IronSessionData {
    tokens?: Credentials;
  }
}
