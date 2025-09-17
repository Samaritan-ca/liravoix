// src/components/TranslationModal.jsx
import { layout } from "../styles/commonStyles";

export default function TranslationModal({ word, translation, onClose }) {
  if (!word) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 1000,
      width: "250px"
    }}>
      <strong>{word}</strong>: {translation || "Loading..."}
      <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
        <button style={layout.button} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
