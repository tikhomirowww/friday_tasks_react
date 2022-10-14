import React, {useState, useContext } from 'react'

const AddPost = () => {
    const [author, setauthor] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('')

      
  return (
    <div>
        <input type="text" placeholder="Body" value={body} />
        <input type="text" placeholder="" value={body} />
        <input type="text" placeholder="" value={body} />

        <button onClick={cre}>Create post</button>
    </div>
  )
}

export default AddPost