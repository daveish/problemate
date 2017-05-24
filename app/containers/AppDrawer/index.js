/*
 *
 * AppDrawer
 *
 */

import { Drawer, MenuItem } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleAppDrawer } from '../AppDrawerToggle/actions';
import makeSelectAppDrawerOpen from './selectors';

class AppDrawer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Drawer
        openSecondary={this.props.mainHand === 'right'}
        open={this.props.open}
        docked={false}
        onRequestChange={this.props.onAppDrawerToggle}
        swipeAreaWidth={60}
      >
        <MenuItem>
          Menu Item
        </MenuItem>
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  open: PropTypes.bool,
  onAppDrawerToggle: PropTypes.func,
  mainHand: PropTypes.string.isRequired,
};

AppDrawer.defaultProps = {
  open: false,
  onAppDrawerToggle: null,
};

const mapDispatchToProps = (dispatch) => ({
  onAppDrawerToggle: () => dispatch(toggleAppDrawer()),
});

const mapStateToProps = createStructuredSelector({
  open: makeSelectAppDrawerOpen(),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
