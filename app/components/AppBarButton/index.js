/**
 *
 * AppBarButton
 *
 */

import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`

`;

const A = styled.a`
  ${buttonStyles}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const ButtonContainer = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  padding: 1rem;
  display: inline-block;
`;

class AppBarButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getButton = () => {
    let button = (
      <A href={this.props.href} onClick={this.props.onClick}>
        {React.Children.toArray(this.props.children)}
      </A>
    );

    if (this.props.handleRoute) {
      button = (
        <StyledButton onClick={this.props.handleRoute}>
          {React.Children.toArray(this.props.children)}
        </StyledButton>
      );
    }

    return button;
  };

  render() {
    return (
      <ButtonContainer>
        {this.getButton()}
      </ButtonContainer>
    );
  }
}

AppBarButton.propTypes = {
  handleRoute: React.PropTypes.func,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
};

export default AppBarButton;
