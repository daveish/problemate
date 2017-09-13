/**
 *
 * Asynchronously loads the component for PostsPage
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator/index';

export default Loadable({
  loader: () => import(/* webpackChunkName: "posts" */ './index'),
  loading: LoadingIndicator,
});
