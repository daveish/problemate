import find from 'lodash/find';
import { createSelector } from 'reselect';

const selectPosts = () => (state) => state.get('posts');

const selectPostsItems = () => createSelector(
  selectPosts(),
  (posts) => posts.get('items').toJS(),
);

const selectPostItem = (id) => createSelector(
  selectPostsItems(),
  (postsItems) => find(postsItems, { id }),
);

export {
  selectPosts,
  selectPostsItems,
  selectPostItem,
};
