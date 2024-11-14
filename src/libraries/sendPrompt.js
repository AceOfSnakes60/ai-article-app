import axios from 'axios'

const sendPrompt = (articleText, prompt) => {

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    axios.post(endpoint,
        {
            "model": "gpt-4o-mini",
            "messeges": [{"role": "user", "content": `${prompt}/n ${articleText}`} ]
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response=>{
            console.log(response);
            return response.data.choices[0].message.content;
        }).catch(error=>{
            console.error('Error communicating with OpenAI', error);
            alert(`Error communicating with OpenAI: ${error}`);
            return;
        })
}

export default sendPrompt;