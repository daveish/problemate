/**
 *
 * AppBar
 *
 */

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.main};
`;

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledDiv />
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
