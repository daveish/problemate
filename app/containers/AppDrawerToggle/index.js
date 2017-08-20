/*
 *
 * AppDrawerToggle
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AppBarButton from '../../components/AppBarButton/index';
import { toggleAppDrawer } from './actions';

class AppDrawerToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBarButton icon={this.props.icon} onClick={this.props.onAppDrawerToggle} />
    );
  }
}

AppDrawerToggle.propTypes = {
  icon: PropTypes.element.isRequired,
  onAppDrawerToggle: PropTypes.func,
};

AppDrawerToggle.defaultProps = {
  onAppDrawerToggle: null,
};

const mapDispatchToProps = (dispatch) => ({
  onAppDrawerToggle: () => dispatch(toggleAppDrawer()),
});

export default connect(null, mapDispatchToProps)(AppDrawerToggle);
