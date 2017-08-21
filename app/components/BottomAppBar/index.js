/**
 *
 * AppBar
 *
 */

import AppBar from 'material-ui/AppBar/AppBar';
import Paper from 'material-ui/Paper/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import FaBars from 'react-icons/lib/fa/bars';
import FaHeart from 'react-icons/lib/fa/heart';
import FaHome from 'react-icons/lib/fa/home';
import FaSearch from 'react-icons/lib/fa/search';
import styled from 'styled-components';
import AppDrawerToggle from '../../containers/AppDrawerToggle';
import theme from '../../styles/theme';
import AppBarButton from '../AppBarButton';
import ContainerLeft from '../ContainerLeft';
import ContainerRight from '../ContainerRight';
import StyledToolbar from '../StyledToolbar';

const StyledAppBar = styled(AppBar)`
  bottom: 0;
  top: auto !important;
`;

const mainItems = [
  <AppBarButton
    key="Search"
    icon={
      <FaSearch color={theme.searchIconColor} alt="Search" />
    }
    to="/search"
  />,
  <AppBarButton
    key="Favorize"
    icon={
      <FaHeart color={theme.heartIconColor} alt="Favorize" />
    }
    to="/favorites"
  />,
  <AppDrawerToggle
    key="Navigation"
    icon={
      <FaBars color={theme.button} alt="Navigate" />
    }
  />,
];

const sideItems = [
  <AppBarButton
    key="Home"
    icon={
      <FaHome color={theme.button} alt="Go to homepage" />
    }
    to="/"
  />,
];

const mainItemsReversed = mainItems.slice().reverse();
const sideItemsReversed = sideItems.slice().reverse();

class BottomAppBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getMainItems = () => (
    mainItems
  );

  getSideItems = () => (
    sideItems
  );

  getMainItemsReversed = () => (
    mainItemsReversed
  );

  getSideItemsReversed = () => (
    sideItemsReversed
  );

  render() {
    return (
      <StyledAppBar color="default">
        <Paper square elevation={6}>
          <StyledToolbar>
            <ContainerLeft>
              {
                this.props.mainHand === 'right'
                  ? this.getSideItems()
                  : this.getMainItemsReversed()
              }
            </ContainerLeft>

            <ContainerRight>
              {
                this.props.mainHand === 'right'
                  ? this.getMainItems()
                  : this.getSideItemsReversed()
              }
            </ContainerRight>
          </StyledToolbar>
        </Paper>
      </StyledAppBar>
    );
  }
}

BottomAppBar.propTypes = {
  mainHand: PropTypes.string.isRequired,
};

export default BottomAppBar;
