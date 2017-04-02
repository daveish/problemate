/**
 *
 * AppBarButton
 *
 */

import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'material-ui';

const StyledIconButton = styled(IconButton)`
  height: 3.5rem !important;
  padding: 1rem !important;
  width: 3.5rem !important;
`;

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
  href: React.PropTypes.string,
  icon: React.PropTypes.element.isRequired,
  onClick: React.PropTypes.func,
};

AppBarButton.defaultProps = {
  href: null,
  onClick: null,
};

export default AppBarButton;
