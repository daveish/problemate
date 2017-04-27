/**
 *
 * AppBar
 *
 */

import React from 'react';
import { FaBars, FaHome } from 'react-icons/lib/fa/index';
import AppDrawerToggle from '../../containers/AppDrawerToggle/index';
import theme from '../../styles/theme';
import AppBarButton from '../AppBarButton/index';
import AppBarWrapper from '../AppBarWrapper/index';
import ContainerLeft from '../ContainerLeft/index';
import ContainerRight from '../ContainerRight/index';
import StyledNav from '../StyledNav/index';

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBarWrapper>
        <StyledNav>
          <ContainerLeft>
            <AppBarButton
              icon={
                <FaHome size="100%" color={theme.button} alt="Go to homepage" />
              }
              href="/"
            />
          </ContainerLeft>

          <ContainerRight>
            {/* <AppBarButton
              icon={
                <FaSearch
                  size="100%"
                  color={theme.searchIconColor}
                  alt="Search"
                />
              }
              href="#"
            />*/}
            {/* <AppBarButton
              icon={
                <FaHeart
                  size="100%"
                  color={theme.heartIconColor}
                  alt="Favorize"
                />
              }
              href="#"
            />*/}
            <AppDrawerToggle
              icon={<FaBars size="100%" color={theme.button} alt="Navigate" />}
              href="#"
            />
          </ContainerRight>
        </StyledNav>
      </AppBarWrapper>
    );
  }
}

export default AppBar;
