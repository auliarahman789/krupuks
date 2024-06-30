"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Introduction from './components/Introduction'
import Production from './components/Production'

function Page() {
  const [color, setColor] = useState('')

  return (
    <div id='#'>
      <main className='flex  min-h-screen  flex-col bg-[#f8e4dc]' >
        <Navbar color={undefined} />
        <div className='h-screen'>
          <Introduction />
        </div>
      </main>
      <main className='flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md' id='history'>
        <div className='flex  min-h-screen  flex-col bg-[#f8e4dc] rounded-md'>
          <About />
        </div>
      </main>
      <main className='flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md' id='production'>
        <Production />
      </main>
    </div>
  )
}

export default Page
