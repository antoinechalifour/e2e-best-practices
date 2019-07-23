import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useForm = () => {
  const formRef = useRef();
  const [isFormValid, setFormValid] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    const isHtmlFormValid = formRef.current.checkValidity();
    const isPasswordValid = password === passwordConfirmation;

    setFormValid(isHtmlFormValid && isPasswordValid);
  }, [email, username, password, passwordConfirmation]);

  return {
    formRef,
    isFormValid,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation
  };
};

function App() {
  const {
    formRef,
    isFormValid,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation
  } = useForm();

  function submitForm(e) {
    e.preventDefault();

    window.alert("Registration successful");
  }

  return (
    <div className="App">
      <form id="registration-form" onSubmit={submitForm} ref={formRef}>
        <h1>Register</h1>

        <div className="form-group">
          <label htmlFor="email">Your email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            placeholder="eg: jane.doe@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Your user name</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
            placeholder="eg: jane_doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-confirmation">Confirm your password</label>
          <input
            id="password-confirmation"
            name="password-confirmation"
            type="password"
            value={passwordConfirmation}
            required
            onChange={e => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm your password..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={!isFormValid}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
