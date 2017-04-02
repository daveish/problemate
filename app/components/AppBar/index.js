/**
 *
 * AppBar
 *
 */

import { Paper } from 'material-ui';
import React from 'react';
import { FaBars, FaHeart, FaHome, FaSearch } from 'react-icons/lib/fa/index';
import styled from 'styled-components';
import theme from '../../styles/theme';
import AppBarButton from '../AppBarButton/index';

const AppBarWrapper = styled(Paper)`
  bottom: 0;
  display: flex;
  height: 3.5rem;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1100;
`;

const StyledNav = styled.nav`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

const AppBarIconLeftContainer = styled.div`
  margin-left: -1rem;
  margin-right: auto;
`;

const AppBarIconRightContainer = styled.div`
  margin-left: auto;
  margin-right: -1rem;
`;

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBarWrapper>
        <StyledNav>
          <AppBarIconLeftContainer>
            <AppBarButton
              icon={
                <FaHome size="100%" color={theme.button} alt="Go to homepage" />
              }
              href="#"
            />
          </AppBarIconLeftContainer>

          <AppBarIconRightContainer>
            <AppBarButton
              icon={<FaSearch size="100%" color={theme.button} alt="Search" />}
              href="#"
            />
            <AppBarButton
              icon={
                <FaHeart size="100%" color={theme.filledHeart} alt="Favorize" />
              }
              href="#"
            />
            <AppBarButton
              icon={<FaBars size="100%" color={theme.button} alt="Navigate" />}
              href="#"
            />
          </AppBarIconRightContainer>
        </StyledNav>
      </AppBarWrapper>
    );
  }
}

export default AppBar;
