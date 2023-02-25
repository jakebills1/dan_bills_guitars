import React from "react";
import ContactForm from "./ContactForm";
import { Box } from "../styled_components/main";
const Contact = () => {
  return (
    <Box>
      <div>
        <h1 style={{ fontWeight: "bold" }}>For more information:</h1>
        <div>Phone: (801) 382-7362‬</div>
        <div><a href="mailto:contact@danbillsguitars.com" style={{ color: 'black', textDecoration: 'underline' }}>Email us</a></div>
      </div>
      <ContactForm />
    </Box>
  );
};
export default Contact;
