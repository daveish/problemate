/**
 *
 * Posts
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { postProp } from '../Post/propTypes';
import PostPreview from '../PostPreview/index';

export default class Posts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.posts.map((post) => <PostPreview key={post.id} post={post} />)}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(postProp).isRequired,
};
