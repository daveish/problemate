/**
 *
 * Asynchronously loads the component for PostPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "post" */ './index'),
  loading: () => null,
});
