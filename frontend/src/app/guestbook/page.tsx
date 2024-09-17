"use client";
import { useState } from "react";
import Button from "@/components/Button";

const initialMessages = [
  // 초기 댓글 데이터
  {
    id: "1",
    name: "홍길동",
    date: "2024-09-15",
    text: "멋진 포트폴리오입니다! 프로젝트를 둘러보는 게 정말 즐거웠어요.",
    replies: [
      {
        id: "1-1",
        name: "김철수",
        date: "2024-09-16",
        text: "감사합니다! 더 많은 프로젝트를 추가할 계획이에요.",
      },
    ],
  },
  // 다른 초기 댓글들...
];

export default function Guestbook() {
  const [messages, setMessages] = useState(initialMessages);
  const [messageText, setMessageText] = useState("");
  const [messageId, setMessageId] = useState("");
  const [replyMessageText, setReplyMessageText] = useState("");
  const [replyMessageId, setReplyMessageId] = useState("");
  const [showReplyForm, setShowReplyForm] = useState<string | null>(null);
  const [currentReplyingMessageId, setCurrentReplyingMessageId] = useState<
    string | null
  >(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
  };

  const handleMessageIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageId(e.target.value);
  };

  const handleReplyMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReplyMessageText(e.target.value);
  };

  const handleReplyMessageIdChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReplyMessageId(e.target.value);
  };

  const handleMessageSubmit = () => {
    if (messageText.trim() === "" || messageId.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      name: messageId,
      date: new Date().toISOString().split("T")[0],
      text: messageText,
      replies: [],
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setMessageText("");
    setMessageId("");
  };

  const handleReplySubmit = (messageId: string) => {
    if (replyMessageText.trim() === "" || replyMessageId.trim() === "") return;

    const newReply = {
      id: Date.now().toString(),
      name: replyMessageId,
      date: new Date().toISOString().split("T")[0],
      text: replyMessageText,
    };

    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId
          ? { ...message, replies: [...(message.replies || []), newReply] }
          : message
      )
    );

    setReplyMessageText("");
    setReplyMessageId("");
    setShowReplyForm(null);
    setCurrentReplyingMessageId(null);
  };

  return (
    <div className="px-6 max-w-3xl mx-auto pt-[10rem] pb-[5rem]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">방명록</h1>
        <p className="text-gray-700">
          제 방명록에 메시지를 남겨주시고, 의견을 알려주세요!
        </p>
      </header>

      {/* 메시지 입력 폼 */}
      <section className="mb-10">
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
      </section>

      {/* 메시지 리스트 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          메시지 <span className="text-gray-400">{messages.length}</span>
        </h2>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="border p-4 rounded">
              <p className="font-semibold">{message.name}</p>
              <p className="text-gray-500 text-sm">{message.date}</p>
              <p className="mt-2">{message.text}</p>

              {/* 대댓글 입력 폼 */}
              <div className="mt-4">
                <button
                  onClick={() => {
                    setShowReplyForm((prev) =>
                      prev === message.id ? null : message.id
                    );
                    setCurrentReplyingMessageId(message.id);
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
                        onChange={handleReplyMessageIdChange}
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
                        onChange={handleReplyMessageChange}
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

              {/* 대댓글 리스트 */}
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
      </section>
    </div>
  );
}
