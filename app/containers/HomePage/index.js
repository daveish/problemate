/*
 *
 * HomePage
 *
 */

import React from 'react';
import ProblemList from '../../components/ProblemList';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ProblemList />
      </div>
    );
  }
}
