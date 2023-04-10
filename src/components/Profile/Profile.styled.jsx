import styled from '@emotion/styled';

export const Section = styled.div`
  display: inline-block;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  margin: 5px;
  width: 200px;
  height: 100%;
`;

export const UserName = styled.p`
  margin: 5px;
  color: darkorange;
`;

export const Tag = styled.p`
  margin: 5px;
  color: darksalmon;
`;

export const Location = styled.p`
  margin: 5px;
  color: gold;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  font-size: 16px;
  text-align: center;
  background-color: rgb(217, 219, 201);
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  margin: 5px;
  font-size: 16px;
`;
