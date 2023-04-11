import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0px;
`;

export const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
  width: 68px;
  height: 68px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: rgb(170, 62, 37);
`;

export const Label = styled.span`
  font-weight: 600px;
  font-size: 18px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-weight: 600px;
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
`;
