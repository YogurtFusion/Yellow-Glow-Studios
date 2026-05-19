import React from "react";
import ContactHead from "./ContactHead";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 mt-16 md:mt-32 mx-auto  max-w-screen-2xl w-full ">
      <ContactHead />

      <ContactForm/>
    </main>
  );
};

export default Contact;
