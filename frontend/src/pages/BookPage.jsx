/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { layout } from "../styles/commonStyles";

export default function BookPage() {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/books/${id}/pages/${page}`, {
      //headers: { Authorization: token ? `Bearer ${token}` : "" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setContent(data.data);
        setMaxPage(data.maxPage || 1);
        setTitle(data.title || "");
      })
      .catch((err) => console.error(err));
  }, [id, page]);

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>
        {title || `Book ${id}`} — Page {page}
      </h1>
      <p>{content ? content.text : "Loading..."}</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          disabled={parseInt(page) <= 1}
          onClick={() => navigate(`/books/${id}/${parseInt(page) - 1}`)}
          style={layout.button}
        >
          Previous
        </button>
        <button
          disabled={parseInt(page) >= maxPage}
          onClick={() => navigate(`/books/${id}/${parseInt(page) + 1}`)}
          style={{ ...layout.button, marginLeft: "1rem" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
*/


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { layout } from "../styles/commonStyles";
import TranslationModal from "../components/TranslationModal";

export default function BookPage() {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [maxPage, setMaxPage] = useState(1);

  // Word TTS / translation state
  const [selectedWord, setSelectedWord] = useState(null);
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    fetch(`https://bd39183c5bcc.ngrok-free.app/books/${id}/pages/${page}`, {
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
})
      .then((res) => res.json())
      .then((data) => {
        setContent({ ...data.data, title: data.title });
        setMaxPage(data.maxPage || 1);
      })
      .catch((err) => console.error(err));
  }, [id, page]);

  const handleWordClick = async (word) => {
    // TTS
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);

    // Set selected word
    setSelectedWord(word);
    setTranslation("Loading...");

    // Fetch translation from public dictionary
    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=fr|en`);
      const data = await res.json();
      const def = data.responseData?.translatedText || "No translation found";
      setTranslation(def);
    } catch (err) {
      console.error(err);
      setTranslation("No translation found");
    }
  };

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>
        {content?.title || `Book ${id}`} — Page {page}
      </h1>

      <p style={{ lineHeight: "1.6", cursor: "text" }}>
        {content
          ? content.text.split(" ").map((word, idx) => (
            <span
              key={idx}
              onClick={() => handleWordClick(word)}
              style={{ cursor: "pointer", marginRight: "0.2rem" }}
            >
              {word}
            </span>
          ))
          : "Loading..."}
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button
          disabled={parseInt(page) <= 1}
          onClick={() => navigate(`/books/${id}/${parseInt(page) - 1}`)}
          style={layout.button}
        >
          Previous
        </button>
        <button
          disabled={parseInt(page) >= maxPage}
          onClick={() => navigate(`/books/${id}/${parseInt(page) + 1}`)}
          style={{ ...layout.button, marginLeft: "1rem" }}
        >
          Next
        </button>
      </div>

      {/* Translation modal */}
      <TranslationModal
        word={selectedWord}
        translation={translation}
        onClose={() => setSelectedWord(null)}
      />
    </div>
  );
}
