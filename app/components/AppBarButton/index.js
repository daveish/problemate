/**
 *
 * AppBarButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledIconButton from '../StyledIconButton/index';

class AppBarButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledIconButton href={this.props.href} onTouchTap={this.props.onClick}>
        {this.props.icon}
      </StyledIconButton>
    );
  }
}

AppBarButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

AppBarButton.defaultProps = {
  onClick: undefined,
};

export default AppBarButton;
