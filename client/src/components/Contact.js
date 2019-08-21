import React from "react";
import ContactForm from "./ContactForm";
import { Box } from "../styled_components/main";
const Contact = () => {
  return (
    <Box>
      <div>
        <h1 style={{ fontWeight: "bold" }}>For more information:</h1>
        <div>Phone: (801) 382-7362‬</div>
        <div>Email: danbillsguitars@gmail.com</div>
      </div>
      <ContactForm />
    </Box>
  );
};
export default Contact;
