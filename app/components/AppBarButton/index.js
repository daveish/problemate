/**
 *
 * AppBarButton
 *
 */

import { IconButton } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  height: 3.5rem !important;
  width: 3.5rem !important;

  svg {
    padding: 1rem;
  }
`;

class AppBarButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledIconButton
        {
          ...this.props.to
            ? { component: Link }
            : { onClick: this.props.onClick }
        }
        to={this.props.to}
      >
        {this.props.icon}
      </StyledIconButton>
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
