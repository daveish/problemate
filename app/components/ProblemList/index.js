/**
 *
 * ProblemList
 *
 */

import React from 'react';
import ProblemCard from '../ProblemCard/index';

const cardItems = [];

for (let i = 0; i < 20; i += 1) {
  cardItems.push({
    id: i,
    image: 'http://placehold.it/300x100',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: 100,
    created: 'vor 2 Minuten',
    avatar: 'http://placehold.it/40x40',
  });
}

class ProblemList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getCards = () => (
    cardItems.map((card) => (
      <ProblemCard
        id={card.id}
        title={card.title}
        author={card.author}
        avatar={card.avatar}
        image={card.image}
        imageAlternative={card.imageAlternative}
        upvotes={card.upvotes}
        created={card.created}
      />
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
