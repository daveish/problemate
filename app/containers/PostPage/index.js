/**
 *
 * PostPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Post from '../../components/Post/index';
import { postProp } from '../../components/Post/propTypes';
import { selectPostItem } from '../PostsPage/selectors';

export class PostPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Post post={this.props.post} />
    );
  }
}

PostPage.propTypes = {
  post: postProp.isRequired,
};

const mapStateToProps = (_, { match }) => createStructuredSelector({
  post: selectPostItem(parseInt(match.params.post, 10)),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(PostPage);
