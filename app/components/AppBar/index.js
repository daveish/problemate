/**
 *
 * AppBar
 *
 */

import React from 'react';
import { FaBars, FaHeart, FaHome, FaSearch } from 'react-icons/lib/fa/index';
import styled from 'styled-components';
import AppBarButton from '../AppBarButton/index';

const AppBarWrapper = styled.div`
  background-color: #bbb;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 1100;
  display: flex;
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
        <AppBarIconLeftContainer>
          <AppBarButton>
            <FaHome size="100%" />
          </AppBarButton>
        </AppBarIconLeftContainer>

        <AppBarIconRightContainer>
          <AppBarButton>
            <FaSearch size="100%" />
          </AppBarButton>
          <AppBarButton>
            <FaHeart size="100%" color="#de1337" />
          </AppBarButton>
          <AppBarButton>
            <FaBars size="100%" />
          </AppBarButton>
        </AppBarIconRightContainer>
      </AppBarWrapper>
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
