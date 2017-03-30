/*
 *
 * AppNavigation
 *
 */

import { MenuItem } from 'material-ui';
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppBar from '../../components/AppBar/index';
import AppDrawer from '../../components/AppDrawer/index';
import messages from './messages';
import makeSelectAppNavigation from './selectors';

export class AppNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <AppDrawer>
          <MenuItem>
            <FormattedMessage {...messages.menuItem1} />
          </MenuItem>
        </AppDrawer>
      </div>
    );
  }
}

AppNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AppNavigation: makeSelectAppNavigation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
