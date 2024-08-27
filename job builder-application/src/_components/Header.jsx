import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Heart, PenBox , BriefcaseBusiness } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Header = () => {
const [ShowSingh , setShowSingh ] = useState(false)

const [Search , SetSearch  ] = useSearchParams();

useEffect(()=>{
  if(Search.get("sign-in")){
    setShowSingh(false);
    SetSearch({})
  }
})



const handleOverlayClick = (e) =>{
  if(e.target === e.currentTarget){
    setShowSingh(false)
  }
}


  return (
    <div>
 
     <nav className='py-4 flex justify-between items-center ' >
     <Link>
     <img src='/logo.png' className='h-20' />
     </Link>
    
    <div className='flex gap-8' >
    <SignedOut>
     <Button variant="outline" onClick={()=> setShowSingh(true)} >Login</Button>
      </SignedOut>
      <SignedIn>
      <Button variant= "destructive" className="rounded-full" >
          <PenBox size={20} className='mr-2'  />
        Post a Job
        </Button>
        <Link to={'/Posting'} >
        </Link>
        <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/MyJobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/SavedJob"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
     {ShowSingh && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ' onClick={handleOverlayClick}  > 
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
