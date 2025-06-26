import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are missing or contain placeholder values
const hasValidUrl = supabaseUrl && !supabaseUrl.includes('your-project-id') && !supabaseUrl.includes('your_supabase_project_url_here');
const hasValidKey = supabaseAnonKey && !supabaseAnonKey.includes('your_supabase_anon_key_here');

let supabaseClient: any;

if (!hasValidUrl || !hasValidKey) {
  console.warn('⚠️ Supabase not configured. Using mock client for development.');
  console.warn('To enable Supabase features:');
  console.warn('1. Click "Connect to Supabase" in the top right corner');
  console.warn('2. Or manually update your .env file with actual Supabase credentials');
  
  // Create a mock client that won't throw errors
  supabaseClient = {
    auth: {
      signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      resetPasswordForEmail: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null })
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      update: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      delete: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      upsert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
    })
  };
} else {
  // Validate URL format
  try {
    new URL(supabaseUrl);
  } catch {
    throw new Error(
      `Invalid VITE_SUPABASE_URL format: "${supabaseUrl}". ` +
      'Please ensure it\'s a valid URL like: https://your-project-id.supabase.co'
    );
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;