import "./App.css";
import "./layout/constants/index.css";

import Home from "./layout";
import MessageLoginForm from "./auth/login/MessageLoginForm";

import { useState, createContext } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8900");
export const HomeContext = createContext();

function App() {
  socket.emit("SendTest--Client", "HelloServer");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (status) => {
    setLoggedIn(status);
  };
  const handleLogout = (status) => {
    setLoggedIn(status);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <MessageLoginForm onLogin={handleLogin}></MessageLoginForm>
      ) : (
        <HomeContext.Provider value={handleLogout}>
          <Home onLogout={handleLogout}></Home>
        </HomeContext.Provider>
      )}
    </div>
  );
}

export default App;
