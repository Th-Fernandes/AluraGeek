import { supabase } from "utils/supabaseClient";

export const supabaseStorage = {
  async upload({bucket, bucketPath, userImg}) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(bucketPath, userImg)

    if (error) console.error(error);
  },

  getPublicURL(bucket, bucketPath) {
    const { publicURL, error } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(bucketPath);
        
    return  publicURL;
  }
}