// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import UsersPage from "./pages/UsersPage";
import NotesPage from "./pages/NotesPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header style={{ padding: 20, borderBottom: "1px solid #ddd", backgroundColor: '#f5f5f5' }}>
          <Link 
            to="/users" 
            style={{ 
              textDecoration: 'none', 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              color: '#333'
            }}
          >
          Diary App - Users
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId/notes" element={<NotesPage />} />
            <Route path="*" element={<UsersPage />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

export default App;