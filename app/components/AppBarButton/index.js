/**
 *
 * AppBarButton
 *
 */

import IconButton from 'material-ui/IconButton/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class AppBarButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IconButton
        {...this.props.to
          ? { component: Link }
          : { onClick: this.props.onClick }}
        to={this.props.to}
      >
        {this.props.icon}
      </IconButton>
    );
  }
}

AppBarButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

AppBarButton.defaultProps = {
  to: '',
  onClick: null,
};

export default AppBarButton;
