const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  organization: "org-A4gyqQV9NTOp74yU5gHyr8uF",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const response = await openai.listEngines();

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How are you today?",
});
console.log(completion.data.choices[0].text);
}
console.log(process.env.OPENAI_API_KEY);
runCompletion();

