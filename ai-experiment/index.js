const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-A4gyqQV9NTOp74yU5gHyr8uF"
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


async function runCompletion () {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Continue the below interactive story."
    });
    console.log(completion.data.choices[0].text);
}
runCompletion();
