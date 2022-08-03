import { supabase } from "utils/supabaseClient";

export const supabaseAuth = {
  getSessionInfo() {
    return supabase.auth.session();
  },

}