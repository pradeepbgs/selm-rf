import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
// import About from './component/KontaktaOss.tsx'
// import Contact from './component/Contact.tsx'

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
