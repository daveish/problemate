/**
 *
 * AppBar
 *
 */

import React from 'react';
import styled from 'styled-components';

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

const IconPlaceholder = styled.div`
  background-color: green;
  height: 3.5rem;
  width: 3.5rem;
  padding: 1rem;
  border: 1px solid black;
  display: inline-block;
`;

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBarWrapper>
        <AppBarIconLeftContainer>
          <IconPlaceholder />
        </AppBarIconLeftContainer>

        <AppBarIconRightContainer>
          <IconPlaceholder />
          <IconPlaceholder />
          <IconPlaceholder />
          <IconPlaceholder />
        </AppBarIconRightContainer>
      </AppBarWrapper>
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
