/*
 *
 * AppDrawer
 *
 */

import Drawer from 'material-ui/Drawer/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import AppBarButton from '../../components/AppBarButton';
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import StyledToolbar from '../../components/StyledToolbar';
import theme from '../../styles/theme';
import { toggleAppDrawer } from '../AppDrawerToggle/actions';
import { selectAppDrawerOpen } from '../AppDrawerToggle/selectors';

const StyledDrawer = styled(Drawer)`
  & > div:last-child {
    width: 16rem;
    height: 100%;
  }
`;

const StyledContainer = styled.div`
  margin-top: auto;
  overflow-y: auto;
`;

const menuItems = [];

for (let i = 1; i <= 30; i += 1) {
  menuItems.push({
    id: i,
    text: `Menu Item ${i}`,
  });
}

class AppDrawer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate() {
    if (this.props.open) {
      this.scrollToBottom();
    }
  }

  getMenuItems = () => menuItems.map(
    (item) => <ListItem key={item.id}>{item.text}</ListItem>,
  ).slice().reverse();

  scrollToBottom = () => {
    this.containerNode.scrollTop = this.containerNode.scrollHeight;
  };

  render() {
    return (
      <StyledDrawer
        anchor={this.props.mainHand}
        open={this.props.open}
        docked={false}
        onRequestClose={this.props.onAppDrawerToggle}
      >
        <StyledContainer
          innerRef={(node) => {
            this.containerNode = node;
          }}
        >
          <List>
            {this.getMenuItems()}
          </List>
        </StyledContainer>

        <Paper elevation={6}>
          <StyledToolbar>
            <ContainerLeft>
              {null}
            </ContainerLeft>
            <ContainerRight>
              <AppBarButton
                to="/settings"
                icon={
                  <FaCog color={theme.button} alt="Search" />
                }
              />
            </ContainerRight>
          </StyledToolbar>
        </Paper>
      </StyledDrawer>
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
