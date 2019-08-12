import React from "react";
import styled from "styled-components";
const Flash = ({ message, success }) => {
  const FlashBox = styled.div`
  background-color: ${ success ? "#28a745" : "#dc3545"};
  text-align: center
  `
  return <FlashBox>{message}</FlashBox>
};
export default Flash;