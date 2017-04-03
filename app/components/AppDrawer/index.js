/**
 *
 * AppDrawer
 *
 */

import { Drawer, MenuItem } from 'material-ui';
import React from 'react';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

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
