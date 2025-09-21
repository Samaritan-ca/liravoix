import { useEffect, useState } from "react";
import { layout } from "../styles/commonStyles";
import { Volume2 } from "lucide-react"; // speaker icon

export default function AccountPage() {
  const token = localStorage.getItem("token");
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (!token) return;

    const fetchWords = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://liravoix.onrender.com/words/display", {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        });
        const data = await res.json();
        if (data?.words) {
          const enriched = await Promise.all(
            data.words.map(async (item) => {
              const word = cleanWord(item.word);
              const extra = await fetchWordInfo(word);
              return { ...item, word, ...extra };
            })
          );
          setWords(enriched);
        }
      } catch (err) {
        console.error("Failed to fetch words:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, [token]);

  const cleanWord = (w) => w.replace(/[^a-zA-ZÀ-ÿ'-]/g, "").trim();

const fetchWordInfo = async (word) => {
  try {
    // 1️⃣ Translation French -> English via MyMemory
    const transRes = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=fr|en`
    );
    const transData = await transRes.json();
    const translation = transData.responseData?.translatedText || "No translation found";

    // 2️⃣ Example sentence from Wiktionary (French page)
    const wikRes = await fetch(
      `https://fr.wiktionary.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=${encodeURIComponent(
        word
      )}&exintro=1&explaintext=1`
    );
    const wikData = await wikRes.json();

    // Extract first non-empty extract from pages
    const pages = wikData.query?.pages || {};
    const firstPage = Object.values(pages)[0];
    const extractText = firstPage?.extract || "";

    // Use first sentence as example
    const example = extractText.split(/[.\n]/).find((s) => s.includes(word)) || "";

    return { translation, example };
  } catch (err) {
    console.error("fetchWordInfo error:", err);
    return { translation: "No translation found", example: "" };
  }
};




  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={layout.page}>
      <h1 style={layout.heading}>My Account</h1>

      {token ? (
        <>
          <p style={{ marginBottom: "1rem", color: "#059669" }}>You are logged in ✅</p>
          <button onClick={handleLogout} style={layout.button}>
            Logout
          </button>

          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#1f2937" }}>
              Learning 📚
            </h2>
            {loading ? (
              <p>Loading your words...</p>
            ) : words.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {words.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...layout.card,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "#111827",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {item.word}
                        <Volume2
                          size={18}
                          style={{ cursor: "pointer", color: "#3b82f6" }}
                          onClick={() => speakWord(item.word)}
                        />
                      </h3>
                      <p style={{ color: "#4b5563", marginTop: "0.5rem" }}>
                        <strong>Translation:</strong> {item.translation}
                      </p>
                      {item.example && (
                        <p style={{ color: "#6b7280", marginTop: "0.5rem", fontStyle: "italic" }}>
                          {item.example}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No words saved yet. Start learning by adding words!</p>
            )}
          </section>
        </>
      ) : (
        <p style={{ color: "#ef4444" }}>Guest user (not logged in)</p>
      )}
    </div>
  );
}
