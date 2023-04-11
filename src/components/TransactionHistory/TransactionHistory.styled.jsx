import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 40px auto;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 5px;

  tr {
    background-color: #fff;
  }

  th {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
    background-color: blue;
    padding: 10px;
  }

  tr:nth-child(2n) {
    background-color: gray;
  }

  td {
    padding: 10px;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    color: black;
  }

  .currency {
    text-transform: uppercase;
  }
`;

export const TableType = styled.td`
  text-transform: capitalize;
`;
