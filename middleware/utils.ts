import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';


/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
export function verifyToken(req: NextRequest) {
    try {
        const jwtToken = req["headers"].get("authorization");
        if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
        if (!jwtToken) return "Error";
    return jwt.verify(jwtToken, process.env.JWT_SECRET);
  } catch (e) {
    console.log('e:', e);
    return null;
  }
}

/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */
// export function getAppCookies(req: any) {
//   const parsedItems = {};
//   if (req.headers.cookie) {
//     const cookiesItems = req.headers.cookie.split('; ');
//     cookiesItems.forEach(cookies => {
//       const parsedItem = cookies.split('=');
//       parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
//     });
//   }
//   return parsedItems;
// }

/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
// export function absoluteUrl(req, setLocalhost) {
//   var protocol = 'https:';
//   var host = req
//     ? req.headers['x-forwarded-host'] || req.headers['host']
//     : window.location.host;
//   if (host.indexOf('localhost') > -1) {
//     if (setLocalhost) host = setLocalhost;
//     protocol = 'http:';
//   }
//   return {
//     protocol: protocol,
//     host: host,
//     origin: protocol + '//' + host,
//     url: req,
//   };
// }
