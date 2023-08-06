import React, { useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import Data from "../../data/data.json";

const Form = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userName, setUserName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.user_name.value;

    emailjs
      .sendForm(
        "service_a5io7vf",
        "template_fzrdqwm",
        form.current,
        "Jcedb9pb0o2WtXZwn"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setUserName(name);
          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form__container">
      <div className="form__div">
        <label className="form__input__label">{Data.formname}</label>
        <input
          type="text"
          name="user_name"
          required
          className="form__input__text"
          placeholder="Your name..."
        />
        <label className="form__input__label">{Data.formemail}</label>
        <input
          type="email"
          name="user_email"
          required
          className="form__input__text"
          placeholder="Your email..."
        />
        <label className="form__input__label">{Data.formmessage}</label>
        <textarea
          name="message"
          required
          className="form__input__text__message"
          placeholder="Your message..."
        />
        <input
          type="submit"
          value={Data.formsend}
          className="form__input__send"
        />
        {showConfirmation && (
          <div className="confirmation__overlay">
            <div className="confirmation__popup">
              <p>
                <span className="confirmation__name">{userName},</span>
                {Data.formconfirm}
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
