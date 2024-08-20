import React from 'react'
import { Outlet } from 'react-router-dom'

const App_layout = () => {
  return (
    <div>
      <div className='grid-background' >
        
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App_layout
