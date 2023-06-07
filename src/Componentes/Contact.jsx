import React from "react";
import { AiFillMessage } from "react-icons/ai";
import "../Estilizacion/contacto.css";

import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xzbqqlav");
  if (state.succeeded) {
    return <p style={{textAlign:"center"}}>Thanks for your message</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xzbqqlav"
      method="POST"
      className="Form"
    >
      <label
      className="Label2"
        htmlFor="email"
      >
        Contact me
      </label>
      <input placeholder="Your email" id="email" type="email" name="email" />
      <ValidationError  prefix="Email" field="email" errors={state.errors} />
      <textarea placeholder="Message" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button id="button" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default Contact;
