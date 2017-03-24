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
import theme from '../../styles/theme';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            {React.Children.toArray(this.props.children)}
            <AppBar />
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
