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
        element: <Onboarding/>,
      },
      {
        path: '/Jobs',
        element: <Job_listing/>,
      } ,
      {
        path: '/Job/:id',
        element: <Job/>,
      } , 
      {
        path: '/Posting',
        element: <Postlisting/>,
      } ,
      {
        path: '/SavedJob',
        element: <SavedJob/>,
      } ,
      {
        path: '/MyJob',
        element: <MyJobs/>,
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
