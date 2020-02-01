import React from "react";
import { FlashBox } from "../styled_components/main";
const Flash = ({ message, success }) => {
  return <FlashBox success={success}>{message}</FlashBox>;
};
export default Flash;
