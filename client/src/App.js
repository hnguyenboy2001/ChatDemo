import "./App.css";
import "./layout/constants/index.css";

import Home from "./layout";
import MessageLoginForm from "./auth/login/MessageLoginForm";

import { useState, createContext } from "react";
import io from "socket.io-client";

export const AppContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [socket, setSocket] = useState(null);
  const handleLogin = async (status) => {
    if (status.isLogged) {
      const socketIO = await io.connect("http://localhost:8900");
      setSocket(socketIO);
      setLoggedIn(status.isLogged);
      setDataUser(status.dataUser);
    }
  };
  const handleLogout = async (isLogged) => {
    if (socket) {
      await socket.disconnect();
      setLoggedIn(isLogged);
    }
  };

  const valueProvider = {
    handleLogin: handleLogin,
    handleLogout: handleLogout,
    socket: socket,
    dataUser: dataUser,
  };
  return (
    <AppContext.Provider value={valueProvider}>
      <div className="App">
        {!loggedIn ? <MessageLoginForm></MessageLoginForm> : <Home></Home>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
