import PropTypes from 'prop-types';
import CardImage from '../Posts/300x100.jpg';
import AvatarImage from '../Posts/40x40.jpg';

export const postProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageAlternative: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
});

export const postDefaultProps = {
  id: 0,
  image: CardImage,
  imageAlternative: '',
  title: 'Device works but does not update',
  author: 'RubyCat',
  viewCount: 100,
  created: 'vor 2 Minuten',
  avatar: AvatarImage,
};
