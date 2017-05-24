/**
 *
 * AppBar
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { FaBars, FaHeart, FaHome, FaSearch } from 'react-icons/lib/fa/index';
import AppDrawerToggle from '../../containers/AppDrawerToggle/index';
import theme from '../../styles/theme';
import AppBarButton from '../AppBarButton/index';
import AppBarWrapper from '../AppBarWrapper/index';
import ContainerLeft from '../ContainerLeft/index';
import ContainerRight from '../ContainerRight/index';
import StyledNav from '../StyledNav/index';

const mainItems = [
  <AppBarButton
    key="Search"
    icon={
      <FaSearch
        size="100%"
        color={theme.searchIconColor}
        alt="Search"
      />
    }
    href="/search"
  />,
  <AppBarButton
    key="Favorize"
    icon={
      <FaHeart
        size="100%"
        color={theme.heartIconColor}
        alt="Favorize"
      />
    }
    href="/favorites"
  />,
  <AppDrawerToggle
    key="Navigation"
    icon={<FaBars size="100%" color={theme.button} alt="Navigate" />}
    href="#"
  />,
];

const sideItems = [
  <AppBarButton
    key="Home"
    icon={
      <FaHome size="100%" color={theme.button} alt="Go to homepage" />
    }
    href="/"
  />,
];

const mainItemsReversed = mainItems.slice().reverse();
const sideItemsReversed = sideItems.slice().reverse();

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      <AppBarWrapper>
        <StyledNav>
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
        </StyledNav>
      </AppBarWrapper>
    );
  }
}

AppBar.propTypes = {
  mainHand: PropTypes.string.isRequired,
};

export default AppBar;
