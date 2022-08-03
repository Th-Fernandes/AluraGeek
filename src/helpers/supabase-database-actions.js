import { supabase } from "utils/supabaseClient";

export const supabaseDatabase = {
  async selectAll({ inTable, thenDo, errorHandler }) {
    const { data, error, status } = await supabase
      .from(inTable)
      .select('*')

    if (error || status >= 400) {
      errorHandler && errorHandler(status);
      throw new Error(`erro ao capturar dados do banco da supabase. CÓDIGO:${error.code}, STATUS:${status}`);
    } else {
      thenDo(data);
    }
  }
}