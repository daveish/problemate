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
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectPostsItems } from './selectors';

export class PostsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Posts posts={this.props.posts} />
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(postProp).isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPostsItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'posts', reducer });
const withSaga = injectSaga({ key: 'posts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostsPage);
