
import { useEffect, useState } from 'react';
import './App.css';
import FileUploader from './Components/FileUploader';
import resultPlaceholder from './libraries/resultPlaceholder';
import sendPrompt from './libraries/sendPrompt';

function App() {
  const [promptFile, setPromptFile] = useState();
  const [targetText, setTargetText] = useState();
  const [result, setResult] = useState();

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

  const handleClick = ()=>{
    resultPlaceholder(setResult);
    //sendPrompt(targetText, promptFile, setResult)
  }



  return (
    <div className="App">
      <div>
        <label>Prompt used:</label>
        {promptFile?<pre>{promptFile}</pre>:<h3>No Prompt file found</h3>}
      </div>
      <div>
        <label>Text to modify:</label>
      <FileUploader handleFile={setTargetText}/>
      </div>
      <button onClick={handleClick} disabled={!(promptFile&&targetText)}>{!result?"Generate":"Regenerate"}</button>
      {result&&<pre>{result}</pre>}
    </div>
  );
}

export default App;
