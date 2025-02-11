import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ThemeProvider } from './context/ThemeContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:slug',
    element: <BlogDetail />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
], {
  basename: '/pixelbyhands',
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true, // Ensure it's set to true
  }
});

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;