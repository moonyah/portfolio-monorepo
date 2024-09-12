import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook - JangMunYong",
  description: "Leave a message in my guestbook.",
  robots: "index, follow",
};

export default function Guestbook() {
  return (
    <div>
      <h1>Guestbook Page</h1>
      {/* 페이지 내용 */}
    </div>
  );
}
