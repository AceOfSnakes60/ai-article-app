import axios from 'axios'

const sendPrompt = (articleText, prompt, handleResult) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    axios.post(endpoint,
        {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": `${prompt} ${articleText}`
                }]
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            console.log(response);
            handleResult(response.data.choices[0].message.content);
        }).catch(error => {
            console.error('Error communicating with OpenAI', error);
            alert(`Error communicating with OpenAI: ${error}`);

        })
}

export default sendPrompt;