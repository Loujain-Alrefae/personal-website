import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'
import Projects from './pages/Projects'

// Define application routes using React Router v6
const routes = createBrowserRouter([
  {
    path :"/", // Root layout route
    element : <Root/>,
    children:[
      {
        path :"",
        element: <Home/>
      },
      {
        path : "projects/:id",
        element : <Projects/>
      }
    ]
  }
] ,{
  base : "/"
})

// Mount the router into the root DOM element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
