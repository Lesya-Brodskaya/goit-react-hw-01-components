import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 80px;
  background-color: #d5e3d1;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    box-shadow: 0px 3px 2px rgba(10, 38, 1), 0px 4px 4px rgba(208, 214, 206),
      0px 4px 8px rgba(152, 163, 147);
  }
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
  margin-left: 15px;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-left: 15px;
  font-size: 24px;
`;
