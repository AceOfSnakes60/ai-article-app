const downloadTxtFile = (text, filename)=>{

    const blob = new Blob([text], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

}

export default downloadTxtFile;