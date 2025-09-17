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
  const { email, password } = req.body;

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

