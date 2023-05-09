import styled from "styled-components";

export const ResultProb = styled.div`
   {
    display: flex;
    margin: 0.5em;
  }
`;
export const Prob = styled.p`
   {
    // display: flex;
    margin: 0.5em;
  }
`;

export const TableDiv = styled.div`
   {
    display: flex;
    // border: 1px solid red;
    margin: 1em;
    padding: 1em;
  }
`;

export const Table = styled.table`
   {
    margin: 0.5em;
    padding: 0.5em;
    border: 1px solid gray;
  }
`;

export const InputNumber = styled.input.attrs({ type: "number", min: "0" })`
  width: 8em;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #0077b6;
  }
`;
