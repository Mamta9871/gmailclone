import './App.css'
import Body from './components/Body';
import Inbox from './components/Inbox'
import Mail from './components/Mail';
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SendEmail from './components/SendEmail';
import Login from './components/Login';
import Signup from './components/Signup';
import {Toaster} from "react-hot-toast"

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Inbox/>
      },
      {
        path:'/mail/:id',
        element:<Mail/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

function App() {

  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar/>
      <RouterProvider router={appRouter}/>
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <SendEmail/>
      </div>
      <Toaster/>
    </div>
  )
}

export default App
