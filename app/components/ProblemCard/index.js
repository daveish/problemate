/**
 *
 * ProblemCard
 *
 */

import { Card, CardHeader, CardMedia } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 1rem;
`;

const StyledCardHeader = styled(CardHeader)`
  display: inline-flex;

  img {
    flex-shrink: 0;
  }

  div {
    padding-right: 0 !important;
  }
`;

class ProblemCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledCard>
        <CardMedia>
          <img src={this.props.image} alt={this.props.imageAlternative} />
        </CardMedia>
        <StyledCardHeader
          title={this.props.title}
          subtitle={
            `${this.props.author} - ${this.props.upvotes} Feel you - ${this.props.created}`
          }
          avatar={this.props.avatar}
        />
      </StyledCard>
    );
  }
}

ProblemCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlternative: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
};

export default ProblemCard;
