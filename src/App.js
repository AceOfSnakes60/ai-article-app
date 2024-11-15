
import { useEffect, useState } from 'react';
import './App.css';
import FileUploader from './Components/FileUploader';
import downloadTxtFile from './libraries/downloadTxtFile';
import resultPlaceholder from './libraries/resultPlaceholder';
import sendPrompt from './libraries/sendPrompt';
import previewDocument from './libraries/previewDocument';

function App() {
  const [promptFile, setPromptFile] = useState();
  const [targetText, setTargetText] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('prompt.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch File');
        }
        console.log(response);
        return response.text();
      })
      .then((text) => { console.log(text); setPromptFile(text) })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    setResult();
  }, [targetText])

  useEffect(()=>{
    setIsLoading(false);
  },[result])

  const handleClick = () => {
    //resultPlaceholder(setResult);
    setIsLoading(true);
    sendPrompt(targetText, promptFile, setResult)
  }
  const handleDownload = () => {
    downloadTxtFile(result);
  }
  const handlePreview = () => {
    previewDocument(result);
  }


  return (
    <div className="App">
      <div className='side-by-side'>
        <div className="block">
          <label className="label">Prompt used:</label>
          {promptFile ? (
            <pre className="file-content">{promptFile}</pre>
          ) : (
            <h3 className='placeholder'>No Prompt file found</h3>)
          }
        </div>
        <div className='block'>
          <label className='label'>Text to modify:</label>
          <FileUploader handleFile={setTargetText} />
        </div>
      </div>
      <div className='block'>
        <button
          className='button'
          onClick={handleClick}
          disabled={!(promptFile && targetText && !isLoading)}
        >
          {!result ? "Generate" : "Regenerate"}
        </button>
        {result && (
          <div className='button-group'>
            <button className='button' onClick={handleDownload}>
              Download
            </button>
            <button className='button' onClick={handlePreview}>
              Preview
            </button>
          </div>
        )}
      </div>
      {result && <pre className="result">{result}</pre>}
    </div>
  );
}

export default App;
