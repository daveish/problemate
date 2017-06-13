import { LOCATION_CHANGE } from 'react-router-redux';
import { closeAppDrawer } from '../containers/AppDrawerToggle/actions';

export default function routerChangeMiddleware() {
  return (store) => (next) => (action) => {
    if (action.type === LOCATION_CHANGE) {
      store.dispatch(closeAppDrawer());
    }

    return next(action);
  };
}
