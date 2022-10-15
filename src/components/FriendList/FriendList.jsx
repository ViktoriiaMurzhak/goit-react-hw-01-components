import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListBox>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
