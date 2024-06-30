"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Introduction from './components/Introduction'

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
      <main className='flex  min-h-screen  flex-col bg-[#f8e4dc]  backdrop-blur-md' id='about'>
        <About />

      </main>
    </div>
  )
}

export default Page
