const resultPlaceholder = (handleResult)=>{
    fetch('result_placeholder.txt')
    .then((response)=>{
      if(!response.ok){
        throw new Error('Failed to fetch File');
      }
      console.log(response);
      return response.text();
    })
    .then((text)=>{console.log(text); handleResult(text)})
    .catch((error)=> console.error(error))

}

export default resultPlaceholder;