import { NextApiRequestExtended, NextApiResponse } from 'next';
import {withSessionApi} from "../../utils/session";
import {parseCookies} from "nookies";

async function handler(
  req: NextApiRequestExtended, res: NextApiResponse
) {
  req.session.tokens = {
    value: 'abc',
    iat: Date.now(),
  }
  await req.session.save()
  res.status(200).json({
    headers: req.headers,
    tokens: req.session.tokens,
    cookies: parseCookies({req})
  })
}

export default withSessionApi(handler)