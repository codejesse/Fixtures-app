import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { io } from "socket.io-client";

const socket = io("/");

function App() {
  useEffect(() => {
    socket.on("updateMatches", () => {
      window.location.reload();
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <div>
        <div className="fixed bottom-4 right-4">
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
            alt="whatsapp-icon"
          />
        </div>
      </div>
    </>
  );
}

export default App;
