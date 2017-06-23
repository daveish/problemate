/**
 *
 * MainContent
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  min-height: 100%;
  padding-bottom: 3.5rem;
`;

export default class MainContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledMain>
        {React.Children.toArray(this.props.children)}
      </StyledMain>
    );
  }
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};
