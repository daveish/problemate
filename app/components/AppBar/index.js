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

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getMainItems = () => (
    <div>
      <AppBarButton
        icon={
          <FaSearch
            size="100%"
            color={theme.searchIconColor}
            alt="Search"
          />
        }
        href="/search"
      />
      <AppBarButton
        icon={
          <FaHeart
            size="100%"
            color={theme.heartIconColor}
            alt="Favorize"
          />
        }
        href="/favorites"
      />
      <AppDrawerToggle
        icon={<FaBars size="100%" color={theme.button} alt="Navigate" />}
        href="#"
      />
    </div>
  );

  getSideItems = () => (
    <AppBarButton
      icon={
        <FaHome size="100%" color={theme.button} alt="Go to homepage" />
      }
      href="/"
    />
  );

  render() {
    return (
      <AppBarWrapper>
        <StyledNav>
          <ContainerLeft>
            {
              this.props.mainHand === 'right'
                ? this.getSideItems()
                : this.getMainItems()
            }
          </ContainerLeft>

          <ContainerRight>
            {
              this.props.mainHand === 'right'
                ? this.getMainItems()
                : this.getSideItems()
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
