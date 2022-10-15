import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-radius: 5px;
`;

export const FriendIsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
  margin-right: 15px;
  margin-left: 15px;
`;

export const FriendAvatar = styled.img`
  margin-right: 15px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${p => p.theme.colors.primaryText};
`;
