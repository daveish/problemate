/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
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

const cards = [
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
  {
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: '100',
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  },
];

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getCards = () => (
    cards.map((card) => (
      <StyledCard>
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
