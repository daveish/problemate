/**
 *
 * AppBarButton
 *
 */

import React from 'react';
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
  href: React.PropTypes.string.isRequired,
  icon: React.PropTypes.element.isRequired,
  onClick: React.PropTypes.func,
};

AppBarButton.defaultProps = {
  onClick: undefined,
};

export default AppBarButton;
