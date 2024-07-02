import { getGroqChatCompletion } from "@/lib/action";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { prompt } = req.body;
      const chatCompletion = await getGroqChatCompletion(prompt);
      res.status(200).json({ response: chatCompletion.choices[0].message.content });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}