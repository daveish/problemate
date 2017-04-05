/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import { MuiThemeProvider } from 'material-ui';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AppBar from '../../components/AppBar/index';
import AppDrawer from '../../components/AppDrawer/index';
import theme from '../../styles/theme';

const AppWrapper = styled.div`
  height: 100%;
`;

const StyledMain = styled.main`
  min-height: 100%;
  padding-bottom: 3.5rem;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <StyledMain>
              Hi
            </StyledMain>
            <AppBar />
            <AppDrawer />
            {React.Children.toArray(this.props.children)}
          </AppWrapper>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
