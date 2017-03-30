/**
 *
 * AppBarButton
 *
 */

import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  display: inline-block;
  height: 3.5rem;
  padding: 1rem;
  width: 3.5rem;
`;

class AppBarButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <A href={this.props.href} onClick={this.props.onClick}>
        {this.props.icon}
      </A>
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
