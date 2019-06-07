import React from "react";
import { Message } from "semantic-ui-react";
const Flash = ({ message, success }) => {
  return success ? (
    <Message positive>
      <Message.Header>{message}</Message.Header>
    </Message>
  ) : (
    <Message negative>
      <Message.Header>{message}</Message.Header>
    </Message>
  );
};
export default Flash;
