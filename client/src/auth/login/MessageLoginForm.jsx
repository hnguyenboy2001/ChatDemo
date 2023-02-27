import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MessageLoginForm.css";

function MessageLoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate email and password here
    onLogin(true);
  };

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

MessageLoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default MessageLoginForm;
