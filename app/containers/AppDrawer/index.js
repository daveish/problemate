/*
 *
 * AppDrawer
 *
 */

import { Drawer, List, Toolbar } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { ListItem } from '../../../node_modules/material-ui/List/index';
import AppBarButton from '../../components/AppBarButton/index';
import ContainerLeft from '../../components/ContainerLeft/index';
import ContainerRight from '../../components/ContainerRight/index';
import theme from '../../styles/theme';
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
        anchor={this.props.mainHand}
        open={this.props.open}
        docked={false}
        onRequestClose={this.props.onAppDrawerToggle}
      >
        <StyledContainer>
          <Toolbar>
            <ContainerLeft>
              {null}
            </ContainerLeft>
            <ContainerRight>
              <AppBarButton
                href="/settings"
                icon={
                  <FaCog
                    size="100%"
                    color={theme.searchIconColor}
                    alt="Search"
                  />
                }
              />
            </ContainerRight>
          </Toolbar>
          <List>
            {menuItems.map(
              (item) => <ListItem key={item.id}>{item.text}</ListItem>,
            )}
          </List>
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
