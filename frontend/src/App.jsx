import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
