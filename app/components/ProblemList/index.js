/**
 *
 * ProblemList
 *
 */

import { Card, CardHeader, CardMedia } from 'material-ui';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 1rem;
`;

const StyledCardHeader = styled(CardHeader)`
  display: inline-flex;
  white-space: normal !important;

  div {
    padding-right: 0 !important;
  }
`;

const cards = [];

for (let i = 0; i < 10000; i += 1) {
  cards.push({
    id: i,
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  });
}

class ProblemList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getCards = () => (
    cards.map((card) => (
      <StyledCard key={card.id}>
        <CardMedia>
          <img src={card.image} alt={card.imageAlternative} />
        </CardMedia>
        <StyledCardHeader
          title={card.title}
          subtitle={
            `${card.author} - ${card.upvotes} Feel you - ${card.created}`
          }
          avatar={card.avatar}
        />
      </StyledCard>
    ))
  );

  render() {
    return (
      <div>
        {this.getCards()}
      </div>
    );
  }
}

ProblemList.propTypes = {};

export default ProblemList;
