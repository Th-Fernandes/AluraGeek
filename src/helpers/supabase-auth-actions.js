import { supabase } from "utils/supabaseClient";

export const supabaseAuth = {
  getSessionInfo() {
    return supabase.auth.session();
  },

  async signIn({email, password, handleError, thenDo}) {
    const { user, session, error: signInError } = await supabase.auth.signIn({email, password});

    if(signInError) {
      handleError && handleError(signInError);
      throw new Error(`erro ao realizar signIn. MESSAGE: ${signInError.message} `);
    } else {
      thenDo && thenDo();
    };
  },

  async signUp({email, password, handleError, thenDo}) {
    const { user, session, error: signUpError } = await supabase.auth.signUp({email, password});

    if(signUpError) {
      handleError && handleError(signUpError);
      throw new Error(`erro ao realizar signUp. MESSAGE: ${signUpError.message} `);
    } else {
      thenDo && thenDo();
    }
  }
}