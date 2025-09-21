const jwt = require('jsonwebtoken');
const supabase = require('../supabaseClient');
const JWT_SECRET = 'my-hardcoded-secret';

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt for:', email);

  const { data, error } = await supabase
    .from('users')
    .select('id, password')
    .eq('email', email)
    .single();

  if (error || !data) return res.status(401).json({ error: 'No username found' });

  if( password !== data.password ) {
    return res.status(401).json({ error: 'Password is incorrect' });
  }

  const token = jwt.sign({ user_id: data.id }, JWT_SECRET, { expiresIn: '777777d' });

  res.json({ token });
};

exports.userSignup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // insert new user
    const { data: newUser, error: insertError } = await supabase
      .from("users")
      .insert([{ email, password, name }])
      .select("id")
      .single();

    if (insertError) throw insertError;

    // generate JWT
    const token = jwt.sign({ user_id: newUser.id }, JWT_SECRET, { expiresIn: "777777d" });

    res.json({ token });
  } catch (err) {
    console.error("Error in userSignup:", err.message);
    res.status(500).json({ error: "Failed to sign up" });
  }
};
