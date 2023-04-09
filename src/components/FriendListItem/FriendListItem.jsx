import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  const { isOnline, avatar, name, id } = props;
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.proTypes = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};
