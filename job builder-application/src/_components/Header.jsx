import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
const [ShowSingh , setShowSingh ] = useState(false)




  return (
    <div>
 
     <nav className='py-4 flex justify-between items-center ' >
     <Link>
     <img src='/logo.png' className='h-20' />
     </Link>
    
    <div className='flex gap-8' >
    <SignedOut>
     <Button variant="outline" onclick={()=> setShowSingh(true)} >Login</Button>
      </SignedOut>
      <SignedIn>
      <Button variant= "destructive" className="rounded-full" >
          <PenBox size={20} className='mr-2'  />
        Post a Job
        </Button>
        <Link to={'/Posting'} >
        </Link>
        <UserButton />
      </SignedIn>
    </div>

     

     </nav>
     {ShowSingh && (
      <div>
        <SignIn 
        signUpFallbackRedirectUrl='/Onboarding'
        fallbackRedirectUrl='/Onboarding'
        
        />
      </div>
     ) }
     
    </div>
  )
}

export default Header
