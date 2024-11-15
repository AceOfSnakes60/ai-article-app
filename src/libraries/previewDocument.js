import insertIntoBody from "./insertIntoBody";

const previewDocument = (text)=>{
    fetch('szablon.html')
    .then((response)=>{
      if(!response.ok){
        throw new Error('Failed to fetch File');
      }
      console.log(response);
      return response.text();
    })
    .then((template)=>{
        const newWindow = window.open('', '_blank');

        if(newWindow){
            console.log(text)
            const fullHTML = insertIntoBody(template, text);
           console.log(`fullHTML: ${fullHTML}`)
            newWindow.document.write(fullHTML);
            
            newWindow.document.close();
        } else {
            alert('Unable to open a new window. Please check your browser settings.');
        }

    })
    .catch((error)=> console.error(error))


}
export default previewDocument;