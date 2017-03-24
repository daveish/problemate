/**
 *
 * AppBar
 *
 */

import { AppBar as MuiAppBar } from 'material-ui';
import React from 'react';
import styled from 'styled-components';

const StyledAppBar = styled(MuiAppBar)`
  background-color: ${(props) => props.theme.main};
`;

class AppBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledAppBar />
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
