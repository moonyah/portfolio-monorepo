import { useState } from 'react';
import Button from '@/components/Button';
import { Message } from '@/types/message';

interface MessageFormProps {
  onSubmit: (message: Message) => void;
}

export default function MessageForm({ onSubmit }: MessageFormProps) {
  const [messageText, setMessageText] = useState('');
  const [messageId, setMessageId] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
  };

  const handleMessageIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageId(e.target.value);
  };

  const handleMessageSubmit = () => {
    if (messageText.trim() === '' || messageId.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      name: messageId,
      date: new Date().toISOString().split('T')[0],
      text: messageText,
      replies: [],
    };

    onSubmit(newMessage);
    setMessageText('');
    setMessageId('');
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="id" className="block text-sm font-medium mb-1">
          아이디
        </label>
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력하세요."
          value={messageId}
          onChange={handleMessageIdChange}
          className="w-full border-none rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          메시지
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="메시지를 입력하세요."
          value={messageText}
          onChange={handleMessageChange}
          className="w-full border-none rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
      </div>
      <div className="text-right">
        <Button onClick={handleMessageSubmit}>제출</Button>
      </div>
    </form>
  );
}
