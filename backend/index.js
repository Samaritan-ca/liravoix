const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization", "ngrok-skip-browser-warning"]
}));

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const wordRoutes = require('./routes/wordRoutes');

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/words', wordRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
