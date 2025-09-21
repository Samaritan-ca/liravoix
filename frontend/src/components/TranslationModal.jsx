import { useState } from "react";
import { layout } from "../styles/commonStyles";
import AuthModal from "./AuthModal";

export default function TranslationModal({ word, translation, onClose }) {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  if (!word) return null;

  const handleAddWord = async () => {
    const token = localStorage.getItem("token"); // adjust if stored differently
    if (!token) {
      setShowLogin(true);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://liravoix.onrender.com/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ word, translation }),
      });

      if (!res.ok) throw new Error("Failed to save word");

      setAdded(true);
    } catch (err) {
      console.error("Error adding word:", err);
      alert("Failed to add word");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 1000,
          width: "300px",
        }}
      >
        <strong style={{ fontSize: "1.1rem" }}>{word}</strong>:{" "}
        {translation || "Loading..."}

        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
          {!added ? (
            <button
              style={{ ...layout.button, padding: "0.5rem 1rem" }}
              onClick={handleAddWord}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Learning"}
            </button>
          ) : (
            <span style={{ color: "green", fontWeight: 600 }}>✔ Added</span>
          )}
          <button
            style={{ ...layout.button, padding: "0.5rem 1rem", background: "#6b7280" }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
