const jwt = require('jsonwebtoken');
const supabase = require('../supabaseClient');
const JWT_SECRET = 'my-hardcoded-secret';

exports.getAllBooks = async (req, res) => {
  console.log('getAllBooks called');
  //const token = req.headers.authorization?.split(' ')[1];
  try {
    //const { user_id } = jwt.verify(token, JWT_SECRET);
    const { data, error: bookError } = await supabase
      .from('books')
      .select('*')
    if (bookError) throw bookError;
    res.json({data}); 
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'get all books failed' });
  }
};

exports.getBookDetails = async (req, res) => {
  //const token = req.headers.authorization?.split(' ')[1];
  const { book_id } = req.body;

  try {
    const { user_id } = jwt.verify(token, JWT_SECRET);
    const { data, error: bookError } = await supabase
      .from('books')
      .select('*')
      .eq('id', book_id)
      .single();
    if (bookError) throw bookError;
    res.json({data}); 
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'get book details failed' });
  }
};

/*exports.getBookPage = async (req, res) => {
  //const token = req.headers.authorization?.split(' ')[1];
  try {
    //const { user_id } = jwt.verify(token, JWT_SECRET);
    const { book_id, page_number } = req.params;

    // First query: Fetch the specific page data
    const { data: pageData, error: pageError } = await supabase
      .from('book_pages')
      .select('*')
      .eq('book_id', book_id)
      .eq('number', page_number)
      .single();

    if (pageError) throw pageError;
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    // Second query: Count the total number of pages for the book
    const { count, error: countError } = await supabase
      .from('book_pages')
      .select('count', { count: 'exact' })
      .eq('book_id', book_id);

    if (countError) throw countError;

    // Return both the page data and the total page count
    res.json({ data: pageData, maxPage: count });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'failed to fetch page' });
  }
};
*/
exports.getBookPage = async (req, res) => {
  try {
    const { book_id, page_number } = req.params;

    // 1️⃣ Fetch the specific page data
    const { data: pageData, error: pageError } = await supabase
      .from('book_pages')
      .select('*')
      .eq('book_id', book_id)
      .eq('number', page_number)
      .single();

    if (pageError) throw pageError;
    if (!pageData) return res.status(404).json({ error: 'Page not found' });

    // 2️⃣ Count total pages
    const { count, error: countError } = await supabase
      .from('book_pages')
      .select('count', { count: 'exact' })
      .eq('book_id', book_id);

    if (countError) throw countError;

    // 3️⃣ Fetch book title from books table
    const { data: bookData, error: bookError } = await supabase
      .from('books')
      .select('title')
      .eq('id', book_id)
      .single();

    if (bookError) throw bookError;

    // 4️⃣ Return page data, maxPage, and book title
    res.json({ data: pageData, maxPage: count, title: bookData.title });

  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'failed to fetch page' });
  }
};

