import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${prop => {
    if(prop.color === "true") {
      return `green`
    } else {
      return `red`
    }
  }};
  border-radius: 50%;
  display: inline-block;`;

export const Avatar = styled.img`display:blok;
border: 1px solid gray;
border-radius: 5%`;

export const Name = styled.p`font-weight: 500;`