import { useEffect, useState } from "react";

const FileUploader = ({handleFile})=>{
    const [fileContent, setFileContent] = useState()

    useEffect(()=>{
        handleFile(fileContent);
    },[fileContent])

    const handleFileChange = (event)=>{
        const file = event.target.files[0];
        
        if(file && file.type === 'text/plain'){
            const reader = new FileReader();

            reader.onload = (e) => {
                setFileContent(e.target.result);
            }

            reader.readAsText(file);
        } else{
            alert("Upload a valid .txt file!");
        }
    };

    return(
        <div>
            <input type="file" accept=".txt" onChange={handleFileChange}/>

            {fileContent && (
                <div>
                    <pre>{fileContent}</pre>
                </div>
            )}
        </div>
    )
}

export default FileUploader;