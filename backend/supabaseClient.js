const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://txynoirhaaxatozosooy.supabase.co'; // replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eW5vaXJoYWF4YXRvem9zb295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NzQ0NDcsImV4cCI6MjA3MzQ1MDQ0N30.dpT7qvZWWGpXc0-tCRIaHzgcEb0R7JkjYzRxlV3QRHA';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
