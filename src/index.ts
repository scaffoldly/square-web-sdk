/*
 * @since 2021-06-23 10:11:30
 * @author junbao <junbao@mymoement.com>
 */

import '../square';
import { __Square } from '../square';

export const SQUARE_JS_URL_SANDBOX = 'https://sandbox.web.squarecdn.com/v1/square.js';

export const SQUARE_JS_URL_PRODUCTION = 'https://web.squarecdn.com/v1/square.js';

export { __Square };

let squarePromise: Promise<typeof __Square> | undefined;

// square injected
declare const Square: typeof __Square;

export function loadSquare(sandbox: boolean): Promise<typeof __Square> {
  if (!squarePromise) {
    squarePromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.crossOrigin = 'anonymous';
      script.src = sandbox ? SQUARE_JS_URL_SANDBOX : SQUARE_JS_URL_PRODUCTION;
      script.onload = () => resolve(Square);
      script.onabort = script.onerror = (e) => {
        document.head.removeChild(script);
        squarePromise = void 0;
        reject(e);
      };
      document.head.appendChild(script);
    });
  }
  return squarePromise;
}
