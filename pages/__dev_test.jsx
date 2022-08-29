import { useEffect, useState } from "react"
import { supabase } from "utils/supabaseClient"
import {supabaseDatabase} from "helpers/supabase-database-actions.js"

export default () => {

  useEffect(async () => {
    const userId = supabase.auth.user().id
    console.log(userId)
    const { data, error } = await supabase
      .from('userProducts')
      .select()
      .match({userId})
    if(error) console.error(error)
    console.log(data)

  }, [])

  return (
    <>
      <input type="file" onChange={(event) => setUserFile(event.target.files[0])} />
    </>
  )
}