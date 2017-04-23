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
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import AppBar from '../../components/AppBar/index';
import theme from '../../styles/theme';
import AppDrawer from '../AppDrawer/index';

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
            <AppBar />
            <AppDrawer />
            <StyledMain>
              {React.Children.toArray(this.props.children)}
            </StyledMain>
          </AppWrapper>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
