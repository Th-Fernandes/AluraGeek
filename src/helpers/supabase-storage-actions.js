import { supabase } from "utils/supabaseClient";

export const supabaseStorage = {
  async upload({bucket, bucketPath, userImg}) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(bucketPath, userImg)

    if (error) throw new Error(error.message);
  },

  getPublicURL(bucket, bucketPath) {
    const { publicURL, error } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(bucketPath);
        
    if (error) throw new Error(error); 
    return  publicURL;
  }
}