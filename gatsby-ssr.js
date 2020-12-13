/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import Provider from './src/components/Cart/CartContext';

const wrapRootElement = Provider;
export { wrapRootElement as default };
