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
    fetch(`https://liravoix.onrender.com/books/${id}/pages/${page}`, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
      .then((res) => res.json())
      .then((data) => {
        setContent({ ...data.data, title: data.title });
        setMaxPage(data.maxPage || 1);
      })
      .catch((err) => console.error(err));
  }, [id, page]);

  const handleWordClick = async (word) => {
    // Remove surrounding punctuation for TTS/translation
    const cleanWord = word.replace(/^[^a-zA-ZÀ-ÿ'-]+|[^a-zA-ZÀ-ÿ'-]+$/g, "").trim();
    if (!cleanWord) return;

    // TTS
    const utterance = new SpeechSynthesisUtterance(cleanWord);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);

    // Set selected word for modal
    setSelectedWord(cleanWord);
    setTranslation("Loading...");

    // Fetch translation from public dictionary
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=fr|en`
      );
      const data = await res.json();
      const def = data.responseData?.translatedText || "No translation found";
      setTranslation(def);
    } catch (err) {
      console.error(err);
      setTranslation("No translation found");
    }
  };

  // Split into paragraphs based on double line breaks
  const renderContent = () => {
    if (!content) return "Loading...";

    return content.text
      .split(/\n\s*\n/) // split by blank lines
      .map((para, pIdx) => (
        <p key={pIdx} style={layout.paragraph}>
          {para.split(/(\s+)/).map((word, wIdx) => (
            <span
              key={wIdx}
              onClick={() => handleWordClick(word)}
              style={layout.word}
            >
              {word}
            </span>
          ))}
        </p>
      ));
  };

  return (
    <div style={layout.page}>
      <div style={layout.card}>
        <h1 style={layout.heading}>
          {content?.title || `Book ${id}`} — Page {page}
        </h1>

        <div style={layout.bookText}>{renderContent()}</div>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <button
            disabled={parseInt(page) <= 1}
            onClick={() => navigate(`/books/${id}/${parseInt(page) - 1}`)}
            style={{
              ...layout.button,
              opacity: parseInt(page) <= 1 ? 0.5 : 1,
            }}
          >
            ⬅ Previous
          </button>
          <button
            disabled={parseInt(page) >= maxPage}
            onClick={() => navigate(`/books/${id}/${parseInt(page) + 1}`)}
            style={{
              ...layout.button,
              opacity: parseInt(page) >= maxPage ? 0.5 : 1,
            }}
          >
            Next ➡
          </button>
        </div>
      </div>

      <TranslationModal
        word={selectedWord}
        translation={translation}
        onClose={() => setSelectedWord(null)}
      />
    </div>
  );
}
