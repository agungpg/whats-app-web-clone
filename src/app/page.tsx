"use client"
import ChatBody from "@/components/ChatBody";
import Header from "@/components/Header";
import PersonalChat from "@/components/PersonalChat";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [activeChatId, setActiveChatId] = useState('')
  return (
    <main className="flex min-h-screen">
      <section className="w-[30%] bg-[red] h-[100vh]">
        <Header />
        <SearchBar />
        <div className="h-[calc(100vh-120px)] overflow-auto">
          {[1,2,3,4,1,1,,1,1,1,1,1,1].map(_ => <PersonalChat onClick={setActiveChatId} />)}
        </div>
      </section>
      <section className="w-[70%] bg-[#F0F2F5] h-[100vh]">
        <ChatBody />
      </section>
    </main>
  );
}
