import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  margin: 15px auto;

  background-color: ${p => p.theme.colors.blue};
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.grey};
`;

export const UserInfoBox = styled.div`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
`;

export const UserAvatar = styled.img`
  width: 50%;
  background-color: ${p => p.theme.colors.lightGrey};
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.grey};
  margin: 25px auto;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 15px;
`;

export const UserTag = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const UserStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${p => p.theme.colors.accentBlue};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border: 1px solid ${p => p.theme.colors.grey};
`;

export const StatsLabel = styled.span`
  color: ${p => p.theme.colors.secondaryText};
  font-size: 14px;
`;

export const StatsValue = styled.span`
  color: ${p => p.theme.colors.primaryText};
  font-size: 16px;
  font-weight: 900;
`;
