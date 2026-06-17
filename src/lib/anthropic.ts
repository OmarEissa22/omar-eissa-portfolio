import Anthropic from '@anthropic-ai/sdk'
import { chatSystemPrompt } from '../data/cv'

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
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
  const stream = await client.messages.stream({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    system: chatSystemPrompt,
    messages,
  })

  for await (const chunk of stream) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      onChunk(chunk.delta.text)
    }
  }
}
