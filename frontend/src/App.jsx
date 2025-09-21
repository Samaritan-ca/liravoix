import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import GrammarPage from "./pages/GrammarPage";
import BookPage from "./pages/BookPage";
import AccountPage from "./pages/AccountPage";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal"; // ⬅️ updated import

export default function App() {
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch("https://liravoix.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      const res = await fetch("https://liravoix.onrender.com/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Signup successful 🎉");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <Navbar onLoginClick={() => setShowAuth(true)} />
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/grammar" element={<GrammarPage />} />
        <Route path="/books/:id/:page" element={<BookPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

