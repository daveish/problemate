/**
 *
 * AppBarButton
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import StyledIconButton from '../StyledIconButton/index';

class AppBarButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const containerElement = <Link to={this.props.href} />;
    const onTouchTap = this.props.onTouchTap;

    return (
      <StyledIconButton
        {
          ...!this.props.toggleLink ? { containerElement } : { onTouchTap }
        }
      >
        {this.props.icon}
      </StyledIconButton>
    );
  }
}

AppBarButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  toggleLink: PropTypes.bool,
  onTouchTap: PropTypes.func,
};

AppBarButton.defaultProps = {
  toggleLink: false,
  onTouchTap: null,
};

export default AppBarButton;
