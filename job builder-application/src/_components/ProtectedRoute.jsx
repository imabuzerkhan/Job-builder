import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({Children}) => {

 const { isSignedIn , user , isLoaded } = useUser()
const {pathname} = useLocation()

if(isLoaded && !isSignedIn && isSignedIn !== undefined ){
  return <Navigate to='/?sign-in = true'/>
}
// do somecoding abuzer yaar
// why i am doing so lazy for doing coding i dont undrsand


  return Children ;
 
}

export default ProtectedRoute
