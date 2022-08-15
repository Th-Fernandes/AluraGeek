import { useEffect, useState } from "react"
import { supabase } from "utils/supabaseClient"

export default () => {
  const [userFile, setUserFile] = useState();
  const [img, setImg] = useState([]);

  useEffect(() => {
    if (userFile) {
      console.log(userFile)
      async function insertFile() {
        const { data, error } = await supabase.storage
          .from('test')
          .upload('public/avatar3.png', userFile)

        if (error) console.error(error)
      }

      // insertFile()

      async function downloadImg() {
        const { data, error } = await supabase
          .storage
          .from('test')
          .list('public', {
            limit: 100,
            offset: 0,
            // sortBy: { column: 'name', order: 'asc' },
          })

        if(error) console.error(error)
        
        const imgURL = data.map(img => `https://amcfqzecuqgrdtixyrkv.supabase.co/storage/v1/object/public/test/public/${img.name}`)
        setImg(imgURL)
      }

      // downloadImg()

      }

  }, [userFile])

  return (
    <>
      <input type="file" onChange={(event) => setUserFile(event.target.files[0])} />
      {
        img &&
        img.map(data => (
          <img style={{width: '300px'}} src={data} key={data} />
        ))
      }
    </>
  )
}