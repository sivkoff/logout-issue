import { NextApiRequestExtended, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import {withSessionApi} from "../../utils/session";

function handler(
  req: NextApiRequestExtended,
  res: NextApiResponse
) {
  res.status(200).json({
    headers: req.headers,
    tokens: req.session.tokens,
    cookies: parseCookies({req})
  })
}

export default withSessionApi(handler)