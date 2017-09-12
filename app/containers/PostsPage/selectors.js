import { createSelector } from 'reselect';

const selectPosts = () => (state) => state.get('posts');

const makeSelectPostsItems = () => createSelector(
  selectPosts(),
  (posts) => posts.get('items').toJS(),
);

export {
  selectPosts,
  makeSelectPostsItems,
};
