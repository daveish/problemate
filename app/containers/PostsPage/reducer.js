/*
 *
 * PostsPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import CardImage from '../../components/Posts/300x100.jpg';
import AvatarImage from '../../components/Posts/40x40.jpg';
import { DEFAULT_ACTION } from './constants';

let postsPlaceholder = List();

for (let i = 0; i < 10; i += 1) {
  postsPlaceholder = postsPlaceholder.push({
    id: i,
    image: CardImage,
    imageAlternative: '',
    title: `Device works but does not update ${i}`,
    author: 'RubyCat',
    viewCount: 100,
    created: 'vor 2 Minuten',
    avatar: AvatarImage,
  });
}

const initialState = fromJS({
  items: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('items', postsPlaceholder);
    default:
      return state;
  }
}

export default homePageReducer;
