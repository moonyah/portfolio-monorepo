'use client';
import { useState } from 'react';
import { Message } from '@/types/message';
import MessageForm from '@/components/Guestbook/MessageForm ';
import MessageList from '@/components/Guestbook/MessageList';
const initialMessages: Message[] = [
  // 초기 댓글 데이터
  {
    id: '1',
    name: '김철수',
    date: '2024-09-15',
    text: '멋진 포트폴리오입니다! 프로젝트를 둘러보는 게 정말 즐거웠어요.',
    replies: [
      {
        id: '1-1',
        name: '장문용',
        date: '2024-09-16',
        text: '감사합니다! 더 많은 프로젝트를 추가할 계획이에요.',
      },
    ],
  },
  // 다른 초기 댓글들...
];

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const addReply = (messageId: string, reply: Message) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId
          ? { ...message, replies: [...(message.replies || []), reply] }
          : message
      )
    );
  };

  return (
    <div className="px-6 max-w-3xl mx-auto pt-[10rem] pb-[5rem]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">방명록</h1>
        <p className="text-gray-700">
          제 방명록에 메시지를 남겨주시고, 의견을 알려주세요!
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-6">
          <strong>공지사항:</strong> 현재는 방명록의 메시지 데이터가 저장되지
          않습니다. 추후에 정상 동작하도록 기능이 추가될 예정이니, 기능이
          활성화되면 다시 이용해 주세요!
        </div>
        <MessageForm onSubmit={addMessage} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          메시지 <span className="text-gray-400">{messages.length}</span>
        </h2>
        <MessageList messages={messages} onReplySubmit={addReply} />
      </section>
    </div>
  );
}
