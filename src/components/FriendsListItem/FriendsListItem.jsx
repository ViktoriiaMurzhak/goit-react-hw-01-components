import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendIsOnline,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
