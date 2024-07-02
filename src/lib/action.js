import Groq from "groq-sdk";
import getSong from "@/misc/getSong.js";
import getLyrics from "@/misc/getLyrics.js";

const groq = new Groq({ apiKey: process.env.GROQ_API });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion(prompt) {
  return await groq.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content: prompt,
      },
    ],
    model:'gemma-7b-it',
    // model: 'llama3-70b-8192',
    // model: 'llama3-8b-8192',
    // model: 'mixtral-8x7b-32768',
  });
}

const options = {
    apiKey: process.env.LYRIC_API,
    title: 'another day of sun',
    artist: ' ',
    optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics)).catch((error) => console.error(error));
getSong(options).then((song) => console.log(`${song.lyrics}`)).catch((error) => console.error(error));
