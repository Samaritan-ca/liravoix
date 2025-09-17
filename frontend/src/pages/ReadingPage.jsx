import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { layout } from "../styles/commonStyles";

export default function ReadingPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //const token = localStorage.getItem("token");
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>Available Books</h1>
      {books.map((book) => (
        <div key={book.id} style={layout.card}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <Link to={`/books/${book.id}/1`}>
            <button style={layout.button}>Start Reading</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
