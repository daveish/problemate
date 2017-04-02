/**
 *
 * AppDrawer
 *
 */

import { Drawer } from 'material-ui';
import React from 'react';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class AppDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Drawer openSecondary>
        {React.Children.toArray(this.props.children)}
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  children: React.PropTypes.node,
};

AppDrawer.defaultProps = {
  children: null,
};

export default AppDrawer;
