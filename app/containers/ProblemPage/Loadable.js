/**
 *
 * Asynchronously loads the component for ProblemPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
