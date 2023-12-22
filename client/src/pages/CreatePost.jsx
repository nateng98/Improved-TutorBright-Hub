import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function CreatePost(){
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  return(
    <form action="">
      <input type="title" placeholder={'Title'}/>
      <input type="summary" placeholder={'Summary'}/>
      <input type="file" />
      <ReactQuill value={content} formats={formats} />
      <button style={{marginTop: '5px'}}>Creat post</button>
    </form>
  ); 
}