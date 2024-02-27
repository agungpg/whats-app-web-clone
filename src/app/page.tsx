'use client'
import { useState } from 'react'

import ChatBody from '@/components/ChatBody'
import Header from '@/components/Header'
import PersonalChat from '@/components/PersonalChat'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  const [_, setActiveChatId] = useState('')
  return (
    <main className='flex min-h-screen'>
      <section className='h-[100vh] w-[30%] bg-[red]'>
        <Header />
        <SearchBar />
        <div className='h-[calc(100vh-120px)] overflow-auto'>
          {[1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
            <PersonalChat
              key={item}
              onClick={setActiveChatId}
            />
          ))}
        </div>
      </section>
      <section className='h-[100vh] w-[70%] bg-[#F0F2F5]'>
        <ChatBody />
      </section>
    </main>
  )
}
