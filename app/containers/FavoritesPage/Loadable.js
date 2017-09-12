/**
 *
 * Asynchronously loads the component for FavoritesPage
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator';

export default Loadable({
  loader: () => import(/* webpackChunkName: "favorites" */ './index'),
  loading: LoadingIndicator,
});
