const insertIntoBody = (template, text)=>{
return template.replace(
    /(<body.*?>)(.*?)(<\/body>)/s,  
    (match, openTag, bodyContent, closeTag) => {
        return `${openTag}${text}${bodyContent}${closeTag}`;
    }
);
}

export default insertIntoBody;