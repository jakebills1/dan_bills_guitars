import React from "react";
import ContactForm from "./ContactForm";
import styled from "styled-components";
const Contact = () => {
  return (
    <Box>
      <div>
        <Header>For more information:</Header>
        <div>Phone: (801) 382-7362‬</div>
        <div>Email: danbillsguitars@gmail.com</div>
      </div>
      <ContactForm />
    </Box>
  );
};
export default Contact;
export const Box = styled.div`
  background-color: #bd9476;
  padding: 1.7% 0.5% 0 0.5%;
  height: 100vh;
`;
export const Header = styled.h1`
  font-weight: bold;
`;
