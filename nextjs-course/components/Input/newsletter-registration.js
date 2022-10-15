import { useRef, useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setEmail(value);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={handleOnChange}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
