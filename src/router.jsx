import { createBrowserRouter, redirect } from 'react-router-dom'
import getSession from './lib/utils/get-session'
import loginAction from './lib/actions/login'
import signupAction from './lib/actions/signup'
import Layout from './components/layout'
import Editor from './components/editor'
import Login from './routes/login'
import Signup from './routes/signup'
import Links from './routes/links'
import Profile from './routes/profile'

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      const session = getSession()

      if (session) return redirect('/editor/links')

      return null
    },
    children: [
      { path: '/', element: <Login />, action: loginAction },
      { path: 'signup', element: <Signup />, action: signupAction }
    ]
  },
  {
    element: <Editor />,
    loader: () => {
      const session = getSession()

      if (!session?.user?.email) return redirect('/')

      return null
    },
    children: [
      { path: 'editor/links', element: <Links /> },
      { path: 'editor/profile', element: <Profile /> }
    ]
  }
])

export default router
