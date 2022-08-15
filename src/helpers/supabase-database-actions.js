import { supabase } from "utils/supabaseClient";

export const supabaseDatabase = {
  async selectAll({ inTable, thenDo, handleError }) {
    const { data, error, status } = await supabase
      .from(inTable)
      .select('*')

    if (error || status >= 400) {
      handleError && handleError(status);
      throw new Error(`erro ao capturar dados do banco da supabase. CÓDIGO:${error.code}, STATUS:${status}`);
    } else {
      thenDo && thenDo(data);
    }

  return data;
  },

  async update({inTable, updatedData, match}) {
    const { data, error } = await supabase
      .from(inTable)
      .update(updatedData)
      .match(match);

      if(error) console.error(error);
  }
}