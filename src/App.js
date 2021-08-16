import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MyNavbar } from "./components/UI/Navbar/MyNavbar";
import { AppRouter } from "./components/UI/AppRouter";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <MyNavbar />
      <AppRouter />
    </Router>
  );
}

export default App;
