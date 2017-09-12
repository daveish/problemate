/**
 *
 * App
 *
 */

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import BottomAppBar from '../../components/BottomAppBar';
import PostPage from '../../containers/PostPage/Loadable';
import theme from '../../styles/theme';
import AppDrawer from '../AppDrawer';
import FavoritesPage from '../FavoritesPage/Loadable';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import SearchPage from '../SearchPage/Loadable';
import SettingsPage from '../SettingsPage/Loadable';

const AppWrapper = styled.div`
  height: 100%;
`;

const StyledMain = styled.main`
  min-height: 100%;
  padding-bottom: 4rem;
`;

const mainHand = 'right';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <BottomAppBar mainHand={mainHand} />
          <AppDrawer mainHand={mainHand} />
          <StyledMain>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/favorites" component={FavoritesPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/settings" component={SettingsPage} />
              <Route path="/user/:user/post/:post" component={PostPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </StyledMain>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
