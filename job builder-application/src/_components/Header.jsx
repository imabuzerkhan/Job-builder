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
    
    <div className='flex gap-8' >
    <SignedOut>
     <Button variant="outline" >Login/Singup</Button>
      </SignedOut>
      <SignedIn>
        <Link to={'/Posting'} >
        <Button variant= "destructive" className="rounded-full" ></Button>
        Post a Job
        </Link>
        <UserButton />
      </SignedIn>
    </div>

     

     </nav>
     
     
    </div>
  )
}

export default Header
