/**
 *
 * Asynchronously loads the component for PostPage
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator';

export default Loadable({
  loader: () => import(/* webpackChunkName: "post" */ './index'),
  loading: LoadingIndicator,
});
