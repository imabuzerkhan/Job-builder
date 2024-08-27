import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App_layout from './layouts/App-layout';
import Landingpage from './pages/Landingpage';
import Onboarding from './pages/Onboarding';
import Job_listing from './pages/Job_listing';
import Job from './pages/Job';
import Postlisting from './pages/Postlisting';
import SavedJob from './pages/SavedJob';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/ui/theme-provider';
import ProtectedRoute from './_components/ProtectedRoute';
const router = createBrowserRouter([
  {
    element: <App_layout />,
    children: [
      {
        path: '/',
        element: <Landingpage />,
      },
      {
        path: '/Onboarding',
        
        element:
        <ProtectedRoute> 
         <Onboarding/>
         </ProtectedRoute> 
      },
      {
        path: '/Jobs',
        element: 
        <ProtectedRoute> 
        <Job_listing/>
        </ProtectedRoute> 
      } ,
      {
        path: '/Job/:id',
        element: 
        <ProtectedRoute> 
        <Job/>
        </ProtectedRoute> 
      } , 
      {
        path: '/Posting',
        element: 
        <ProtectedRoute> 
        <Postlisting/>
        </ProtectedRoute> 
      } ,
      {
        path: '/SavedJob',
        element: 
        <ProtectedRoute> 
        <SavedJob/>
        </ProtectedRoute> 
      } ,
      {
        path: '/MyJob',
        element: 
        <ProtectedRoute> 
        
        <MyJobs/>
        </ProtectedRoute> 
      } ,

    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
  )

 

};

export default App;
