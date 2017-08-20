/*
 *
 * AppDrawer
 *
 */

import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import AppBarButton from '../../components/AppBarButton/index';
import ContainerLeft from '../../components/ContainerLeft/index';
import ContainerRight from '../../components/ContainerRight/index';
import theme from '../../styles/theme';
import { toggleAppDrawer } from '../AppDrawerToggle/actions';
import { selectAppDrawerOpen } from '../AppDrawerToggle/selectors';

const StyledContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  margin-top: auto;
`;

const AppDrawerList = styled(List)`
  flex-grow: 0 !important;
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
                to="/settings"
                icon={
                  <FaCog size="100%" color={theme.searchIconColor} alt="Search" />
                }
              />
            </ContainerRight>
          </Toolbar>
          <AppDrawerList>
            {menuItems.map(
              (item) => <ListItem key={item.id}>{item.text}</ListItem>,
            )}
          </AppDrawerList>
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
  open: selectAppDrawerOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
