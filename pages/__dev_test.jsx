import { useEffect, useState } from "react"
import { supabase } from "utils/supabaseClient"
import {supabaseDatabase} from "helpers/supabase-database-actions.js"

export default () => {

  useEffect(async () => {
    console.log(
       await supabaseDatabase.select({
        inTable: 'userProducts',
        select: 'items',
        match: {userId: '8343cafe-8f88-40af-98ec-c31f30eea5c3'}
      })
    )
  }, [])

  return (
    <>
      <input type="file" onChange={(event) => setUserFile(event.target.files[0])} />
    </>
  )
}