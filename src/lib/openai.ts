import OpenAI from 'openai'
import { chatSystemPrompt } from '../data/cv'

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function sendMessage(
  messages: Message[],
  onChunk: (text: string) => void,
): Promise<void> {
  const stream = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 512,
    stream: true,
    messages: [
      { role: 'system', content: chatSystemPrompt },
      ...messages,
    ],
  })

  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content
    if (text) onChunk(text)
  }
}
