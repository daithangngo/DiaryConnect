// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NotesPage from "./components/UserNoteCard/PostsPage";
import AppOwnerPage from "./pages/AppOwnerPage";
import LoginRegistation from "./components/RegistrationForm";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header style={{ padding: 20, borderBottom: "1px solid #ddd", backgroundColor: '#f5f5f5' }}>
          <h1 
            style={{ 
              textDecoration: 'none', 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              color: '#333'
            }}
          >
          DiaryGram
          </h1>
        </header>

        <main>
          <Routes>
            <Route path="users/owner" element={<AppOwnerPage />} />
            <Route path="/users/:userId/posts" element={<NotesPage />} />
            <Route path="users/login" element={<LoginRegistation/>}/>
            <Route path="*" element={<LoginRegistation/>} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

export default App;