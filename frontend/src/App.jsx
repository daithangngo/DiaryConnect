import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotesPage from "./pages/NotesPage";

const App = () => {
  return (
    <Router>
      <header style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
        <Link to="/users">Users</Link>
      </header>

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId/notes" element={<NotesPage />} />
        <Route path="*" element={<UsersPage />} />
      </Routes>

    </Router>
  );
};

export default App;
