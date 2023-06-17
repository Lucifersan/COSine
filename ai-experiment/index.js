const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-A4gyqQV9NTOp74yU5gHyr8uF"
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


async function runCompletion () {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "Insert backstory context here."}, {"role": "user", "content": "Insert user message here."}],
        max_tokens: 256
    });
    console.log(completion.data.choices[0].message.content);
}
runCompletion();
