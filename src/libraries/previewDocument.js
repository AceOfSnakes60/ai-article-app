const previewDocument = (text)=>{
    const htmlHeader = `<!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>preview</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
                color: #333;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                min-height: 100vh;
            }
    
            .container {
                max-width: 800px;
                width: 100%;
                background: #ffffff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                padding: 20px;
                margin: 20px;
            }
    
            h1 {
                font-size: 2.5em;
                color: #2c3e50;
                margin-top: 0;
                text-align: center;
            }
    
            h2 {
                font-size: 1.8em;
                color: #34495e;
                margin-top: 30px;
            }
    
            p {
                font-size: 1em;
                margin: 20px 0;
                text-align: justify;
            }
    
            img {
                display: block;
                width: 100%;
                max-width: 600px;
                height: auto;
                margin: 20px auto;
            }
    
            /* Add responsive layout */
            @media (max-width: 768px) {
                .container {
                    padding: 15px;
                }
                h1 {
                    font-size: 2em;
                }
                h2 {
                    font-size: 1.5em;
                }
                p {
                    font-size: 0.9em;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">`;


    const newWindow = window.open('', '_blank');

    if(newWindow){
        newWindow.document.write(htmlHeader.concat(text, "</div></body>"));
        newWindow.document.close();
    } else {
        alert('Unable to open a new window. Please check your browser settings.');
    }
}
export default previewDocument;