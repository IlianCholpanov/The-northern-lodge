/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bcewejkxewzfbgctteev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZXdlamt4ZXd6ZmJnY3R0ZWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNDIwODQsImV4cCI6MjAzMDgxODA4NH0.B7zDZLJR0GlRsuYArNUh2ef84xov0OfY7iY0kmBj05Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
