/*
 *
 * HomePage
 *
 */

import React from 'react';
import Posts from '../../components/Posts';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Posts />
    );
  }
}
