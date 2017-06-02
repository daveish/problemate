/*
 *
 * AppDrawer
 *
 */

import Drawer from 'material-ui/Drawer/Drawer';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { toggleAppDrawer } from '../AppDrawerToggle/actions';
import makeSelectAppDrawerOpen from './selectors';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  overflow-y: auto;
`;

const menuItems = [];

for (let i = 1; i <= 3; i += 1) {
  menuItems.push({
    id: i,
    text: `Menu Item ${i}`,
  });
}

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
        <StyledContainer>
          {menuItems.map(
            (item) => <MenuItem key={item.id}>{item.text}</MenuItem>,
          )}
        </StyledContainer>
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
