import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { layout } from "../styles/commonStyles";

export default function ReadingPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://liravoix.onrender.com/books", {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>Available Books</h1>
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                ...layout.card,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem",
                height: "150px", // fixed height
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ flex: 1, overflow: "hidden", paddingRight: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={book.title}
                >
                  {book.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "0",
                    fontSize: "0.95rem",
                    lineHeight: "1.4",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                  title={book.description}
                >
                  {book.description}
                </p>
              </div>
              <div>
                <Link to={`/books/${book.id}/1`}>
                  <button style={{ ...layout.button, whiteSpace: "nowrap" }}>
                    Start Reading
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
