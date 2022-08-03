import { supabase } from "utils/supabaseClient";

export const supabaseAuth = {
  getSessionInfo() {
    return supabase.auth.session();
  },

  getUser() {
    return supabase.auth.user();
  },

  async signIn({email, password, handleError, thenDo}) {
    const { user, session, error: signInError } = await supabase.auth.signIn({email, password});

    if(signInError) {
      handleError && handleError(signInError.message);
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
  },

  async signOut({thenDo}) {
    const { error } = await supabase.auth.signOut();

    if(error) {
      throw new Error(`Erro ao realizar signOut. Error:${erro}`)
    } else {
      thenDo && thenDo()
    }
    
  }
}