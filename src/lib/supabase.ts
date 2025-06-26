import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are missing or contain placeholder values
if (!supabaseUrl || supabaseUrl.includes('your_supabase_project_url_here')) {
  throw new Error(
    'Missing or invalid VITE_SUPABASE_URL. Please set your actual Supabase project URL in the .env file. ' +
    'It should look like: https://your-project-id.supabase.co'
  );
}

if (!supabaseAnonKey || supabaseAnonKey.includes('your_supabase_anon_key_here')) {
  throw new Error(
    'Missing or invalid VITE_SUPABASE_ANON_KEY. Please set your actual Supabase anonymous key in the .env file.'
  );
}

// Validate URL format
try {
  new URL(supabaseUrl);
} catch {
  throw new Error(
    `Invalid VITE_SUPABASE_URL format: "${supabaseUrl}". ` +
    'Please ensure it\'s a valid URL like: https://your-project-id.supabase.co'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);