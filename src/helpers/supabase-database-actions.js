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

  async select({inTable, select, match}) {
    const { data, error, status } = await supabase
      .from(inTable)
      .select(select)
      .match(match /*{userId: '4444aaaa-4a55-40af-98ec-c31f30eea5c3'} */)

    return data
  },

  async update({inTable, updatedData, match}) {
    const { data, error } = await supabase
      .from(inTable)
      .update(updatedData)
      .match(match);

      console.log(error)
      if(error) throw new Error(error.message);
  },

  async insert({inTable, insert}) {
    const { data, error } = await supabase
      .from(inTable) /* STRING */
      .insert(insert) /* OBJ */
  }
}