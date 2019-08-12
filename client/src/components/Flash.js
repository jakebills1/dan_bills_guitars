import React from "react";
import styled from "styled-components";
const Flash = ({ message, success }) => {
  const FlashBox = styled.div`
    background-color: ${success ? "#cfffd1" : "#FF9994"};
    text-align: center;
    border: solid ${success ? "green" : "red"} 1px;
    border-radius: 3px;
    padding: 10px 0;
  `;
  return <FlashBox>{message}</FlashBox>;
};
export default Flash;
