import React, { useState, useContext } from "react";
import "./MessageLoginForm.css";
import { AppContext } from "../../App";
import getFriendsApi from "../../api/Page";

function MessageLoginForm() {
  const valueProvider = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getStatus() {
    const isLogged = true;
    const dataUser = {
      username: email,
      password: password,
      friendsList: getFriendsApi(email),
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
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            pattern=".{5,}"
            required
            title="Username có ít nhất 5 ký tự"
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
            title="Mật khẩu không được để trống"
            // pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            // required
            // title="Mật khẩu phải chứa ít nhất một chữ viết hoa, một số và một kí tự đặc biệt, và có ít nhất 8 ký tự"
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
