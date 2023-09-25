import { createBrowserRouter } from 'react-router-dom'
import loginAction from './lib/actions/login'
import signupAction from './lib/actions/signup'
import Layout from './components/layout'
import Login from './routes/login'
import Signup from './routes/signup'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Login />, action: loginAction },
      { path: 'signup', element: <Signup />, action: signupAction }
    ]
  }
])

export default router
