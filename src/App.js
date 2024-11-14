
import { useEffect, useState } from 'react';
import './App.css';
import FileUploader from './Components/FileUploader';

function App() {
  const [promptFile, setPromptFile] = useState();

  useEffect(()=>{
    fetch('prompt.txt')
      .then((response)=>{
        if(!response.ok){
          throw new Error('Failed to fetch File');
        }
        console.log(response);
        return response.text();
      })
      .then((text)=>{console.log(text); setPromptFile(text)})
      .catch((error)=> console.error(error))
  },[])


  return (
    <div className="App">
      <div>
        <label>Prompt used:</label>
        {promptFile?<pre>{promptFile}</pre>:<h3>No Prompt file found</h3>}
      </div>
      <div>
        <label>Text to modify:</label>
      <FileUploader/>
      </div>
      <button>Submit</button>
      
    </div>
  );
}

export default App;
