import React from "react";
import { AiFillMessage } from "react-icons/ai";
import "../Estilizacion/contacto.css";

import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xzbqqlav");
  if (state.succeeded) {
    return <p style={{textAlign:"center"}}>Thanks!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xzbqqlav"
      method="POST"
      className="Form"
    >
      <label
        htmlFor="email"
        style={{
          textAlign: "center",
          color: "#432874",
          fontSize: "x-large",
          marginBottom: "10px",
        }}
      >
        Send me a message!<AiFillMessage style={{color:"#432874"}}/>
      </label>
      <input placeholder="email" id="email" type="email" name="email" />
      <ValidationError  prefix="Email" field="email" errors={state.errors} />
      <textarea placeholder="message" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button id="button" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default Contact;
