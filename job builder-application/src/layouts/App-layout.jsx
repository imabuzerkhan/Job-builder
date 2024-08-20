import React from 'react'
import { Outlet } from 'react-router-dom'
import './App_layout.css';
import Header from '@/_components/Header';

const App_layout = () => {
  return (
    <div>
      <div className='grid-background' ></div>
      <main className='min-h-screen container '  >
        <Header/>
      <Outlet></Outlet>
      </main>
      <div className='py-4 px-10 text-center font-bold text-2xl bg-gray-800 mt-10 ' >
        Made with by 😍 Mohammad Abuzer Khan 
      </div>
    </div>
  )
}

export default App_layout
