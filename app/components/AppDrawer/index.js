/**
 *
 * AppDrawer
 *
 */

import { Drawer, MenuItem } from 'material-ui';
import React from 'react';

class AppDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Drawer openSecondary open={this.props.open}>
        <MenuItem>
          Menu Item
        </MenuItem>
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  open: React.PropTypes.bool,
};

AppDrawer.defaultProps = {
  open: false,
};

export default AppDrawer;
