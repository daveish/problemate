/**
 *
 * PostPage
 *
 */

import React from 'react';
import Post from '../../components/Post/index';
import { postProp } from '../../components/Post/propTypes';

export default class PostPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Post post={this.props.post} />
    );
  }
}

PostPage.propTypes = {
  post: postProp.isRequired,
};
