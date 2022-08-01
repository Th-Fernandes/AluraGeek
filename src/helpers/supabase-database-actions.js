import { supabase } from "utils/supabaseClient"

export const supabaseDatabase = {
  async selectAll({ inTable, thenDo, errorHandler }) {
    const { data, error, status } = await supabase
      .from(inTable)
      .select('*')

    if (error || status >= 400) {
      errorHandler(data, status);
      throw new Error('d');
    } else {
      thenDo(data);
    }

  }
}