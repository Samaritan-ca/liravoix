import { useState } from "react";
import { layout } from "../styles/commonStyles";

export default function AuthModal({ onClose, onLogin, onSignup }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await onLogin(email, password);
    } else {
      await onSignup(name, email, password);
    }
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2.5rem",
          borderRadius: "12px",
          width: "360px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ ...layout.heading, fontSize: "1.5rem", marginBottom: "1rem" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "6px" }}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "6px" }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "6px" }}
            required
          />

          <button type="submit" style={layout.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{ ...layout.button, background: "#6b7280" }}
          >
            Cancel
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
          {isLogin ? (
            <>
              New user?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                style={{ color: "#2563eb", background: "none", border: "none", cursor: "pointer" }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                style={{ color: "#2563eb", background: "none", border: "none", cursor: "pointer" }}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
