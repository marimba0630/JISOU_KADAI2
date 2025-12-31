import { createClient } from "@supabase/supabase-js";

//本番用
//const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
//const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//Jest テスト用
const supabaseURL = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);