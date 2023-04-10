import PropTypes from 'prop-types';
import {FriendStatus, Avatar, Name} from './FriendListItem.styled';

export const FriendListItem = ({ friends:{isOnline, avatar, name} }) => {
  return (
    < >
      <FriendStatus color={isOnline.toString()}></FriendStatus>
      <Avatar src={avatar} alt="User avatar" width="48"/> 
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.proTypes = {
  isOnline:PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};
