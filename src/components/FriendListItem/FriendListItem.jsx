import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus status={isOnline}></FriendStatus>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.proTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
