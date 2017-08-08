/**
 *
 * AppBarButton
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import StyledIconButton from '../StyledIconButton/index';

class AppBarButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const component = (props) => <Link to={this.props.href} {...props} />;
    const onClick = this.props.onClick;

    return (
      <StyledIconButton
        {
          ...!this.props.toggleLink ? { component } : { onClick }
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
  onClick: PropTypes.func,
};

AppBarButton.defaultProps = {
  toggleLink: false,
  onClick: null,
};

export default AppBarButton;
