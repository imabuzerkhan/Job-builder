import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
 
     <nav className='py-4 flex justify-between items-center ' >
     <Link>
     <img src='/logo.png' className='h-20' />
     </Link>
     <Button variant="outline" >Login/Singup</Button>
     </nav>
     
     
    </div>
  )
}

export default Header
