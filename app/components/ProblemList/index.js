/**
 *
 * ProblemList
 *
 */

import React from 'react';
import ProblemCard from '../ProblemCard/index';

const cardItems = [];

for (let i = 0; i < 10; i += 1) {
  cardItems.push({
    id: i,
    image: 'http://lorempixel.com/300/100/',
    imageAlternative: '',
    title: 'Device works but does not update',
    author: 'RubyCat',
    upvotes: 100,
    created: 'vor 2 Minuten',
    avatar: 'http://lorempixel.com/40/40/people/',
  });
}

class ProblemList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getCards = () => (
    cardItems.map((card) => <ProblemCard key={card.id} {...card} />)
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
