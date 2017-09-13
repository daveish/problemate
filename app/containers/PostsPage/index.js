/**
 *
 * PostsPage
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { postProp } from '../../components/Post/propTypes';
import Posts from '../../components/Posts/index';
import { defaultAction } from './actions';
import { selectPostsItems } from './selectors';

export class PostsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(defaultAction());
  }

  render() {
    return (
      <Posts posts={this.props.posts} />
    );
  }
}

PostsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(postProp).isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPostsItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(PostsPage);
