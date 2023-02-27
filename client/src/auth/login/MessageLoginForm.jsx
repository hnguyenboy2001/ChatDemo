import React, { useState, useContext } from "react";
import "./MessageLoginForm.css";
import { AppContext } from "../../App";

function MessageLoginForm() {
  const valueProvider = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getStatus() {
    const isLogged = true;
    const dataUser = {
      username: email,
      password: password,
    };
    return {
      isLogged: isLogged,
      dataUser: dataUser,
    };
  }
  async function handleSubmit(event) {
    const status = await getStatus();
    valueProvider.handleLogin(status);

    event.preventDefault();
    // Validate email and password here
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="message-login-form-container">
      <h1 className="message-login-form-heading">Message Login</h1>
      <form className="message-login-form" onSubmit={handleSubmit}>
        <div className="message-login-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="message-login-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="message-login-form-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default MessageLoginForm;
