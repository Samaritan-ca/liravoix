const jwt = require('jsonwebtoken');
const supabase = require('../supabaseClient');
const JWT_SECRET = 'my-hardcoded-secret';

exports.addWord = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const { user_id } = jwt.verify(token, JWT_SECRET);
    const { word } = req.body;

    if (!word) {
      return res.status(400).json({ error: "Word is required" });
    }

    const { data, error } = await supabase
      .from("words")
      .insert([{ user_id, word }])
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, word: data });
  } catch (err) {
    console.error("Error in addWord:", err.message);
    res.status(500).json({ error: "Failed to add word" });
  }
};

exports.getWords = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const { user_id } = jwt.verify(token, JWT_SECRET);

    const { data, error } = await supabase
      .from("words")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false }); // newest first if you have created_at

    if (error) throw error;

    res.json({ success: true, words: data });
  } catch (err) {
    console.error("Error in getWords:", err.message);
    res.status(500).json({ error: "Failed to fetch words" });
  }
};
