import { LOCATION_CHANGE } from 'react-router-redux';
import { closeAppDrawer } from '../containers/AppDrawerToggle/actions';
import { selectAppDrawerOpen } from '../containers/AppDrawerToggle/selectors';

export default function routerChangeMiddleware() {
  return (store) => (next) => (action) => {
    if (
      action.type === LOCATION_CHANGE
      && selectAppDrawerOpen(store.getState())
    ) {
      store.dispatch(closeAppDrawer());
    }

    return next(action);
  };
}
