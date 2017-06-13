/*
 *
 * AppDrawerToggle actions
 *
 */

import { CLOSE_APP_DRAWER, TOGGLE_APP_DRAWER } from './constants';

export const toggleAppDrawer = () => ({
  type: TOGGLE_APP_DRAWER,
});

export const closeAppDrawer = () => ({
  type: CLOSE_APP_DRAWER,
});
