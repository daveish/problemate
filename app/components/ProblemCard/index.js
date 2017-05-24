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
  margin: 0.625rem;
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

const StyledCardSubtitle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    white-space: nowrap;
  }

  li:after {
    content: " \\002022";
    padding-right: 0.249166667em;
  }

  li:last-child:after {
    content: "";
    padding-right: 0;
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
            <StyledCardSubtitle>
              <li>{this.props.author}</li>
              <li>{this.props.upvotes} Feel you</li>
              <li>{this.props.created}</li>
            </StyledCardSubtitle>
          }
          avatar={this.props.avatar}
          titleStyle={{
            fontSize: '0.875rem',
          }}
          subtitleStyle={{
            fontSize: '0.75rem',
          }}
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
