import React from "react";
import ContactForm from "./ContactForm";
import { Header, } from 'semantic-ui-react';
const Contact = () => {
  return (
    <div style={{ backgroundColor: "#bd9476", padding: "20px 5px 0 5px", height: "100vh" }}>
      <div>
        <Header>For more information:</Header>
        <div>Phone: (801) 382-7362‬</div>
        <div>Email: danbillsguitars@gmail.com</div>
      </div>
      <ContactForm />
    </div>
  );
};
export default Contact;
