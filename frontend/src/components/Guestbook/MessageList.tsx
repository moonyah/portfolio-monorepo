import { useState } from 'react';
import Button from '@/components/Button';
import { Message } from '@/types/message';

interface MessageListProps {
  messages: Message[];
  onReplySubmit: (messageId: string, reply: Message) => void;
}

export default function MessageList({
  messages,
  onReplySubmit,
}: MessageListProps) {
  const [showReplyForm, setShowReplyForm] = useState<string | null>(null);
  const [replyMessageText, setReplyMessageText] = useState('');
  const [replyMessageId, setReplyMessageId] = useState('');

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessageText(e.target.value);
  };

  const handleReplyIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyMessageId(e.target.value);
  };

  const handleReplySubmit = (messageId: string) => {
    if (replyMessageText.trim() === '' || replyMessageId.trim() === '') return;

    const newReply: Message = {
      id: Date.now().toString(),
      name: replyMessageId,
      date: new Date().toISOString().split('T')[0],
      text: replyMessageText,
      replies: [],
    };

    onReplySubmit(messageId, newReply);
    setReplyMessageText('');
    setReplyMessageId('');
    setShowReplyForm(null);
  };

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="border p-4 rounded">
          <p className="font-semibold">{message.name}</p>
          <p className="text-gray-500 text-sm">{message.date}</p>
          <p className="mt-2">{message.text}</p>

          <div className="mt-4">
            <button
              onClick={() => {
                setShowReplyForm((prev) =>
                  prev === message.id ? null : message.id
                );
              }}
            >
              댓글 쓰기
            </button>
            {showReplyForm === message.id && (
              <form className="mt-2">
                <div>
                  <input
                    id="reply-id"
                    type="text"
                    placeholder="아이디를 입력하세요."
                    value={replyMessageId}
                    onChange={handleReplyIdChange}
                    className="w-full border-none rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 mb-3"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="reply-message"
                    rows={4}
                    placeholder="내용을 입력하세요."
                    value={replyMessageText}
                    onChange={handleReplyChange}
                    className="w-full border-none rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                <div className="text-right mt-2">
                  <Button onClick={() => handleReplySubmit(message.id)}>
                    제출
                  </Button>
                </div>
              </form>
            )}
          </div>

          {message.replies && (
            <div className="mt-4 space-y-2">
              {message.replies.map((reply) => (
                <div key={reply.id} className="border p-2 rounded">
                  <p className="font-semibold">{reply.name}</p>
                  <p className="text-gray-500 text-sm">{reply.date}</p>
                  <p className="mt-2">{reply.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
