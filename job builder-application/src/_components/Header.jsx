import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
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

     {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}

     </nav>
     
     
    </div>
  )
}

export default Header
