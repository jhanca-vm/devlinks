import clsx from 'clsx'
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import Field from '../components/field'

export default function Login() {
  const error = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <h1>Login</h1>
      <p>Add your details below to get back into the app</p>
      <Form method="post" className="mt-10 grid gap-y-6" noValidate>
        <Field
          id="email"
          label="Email address"
          type="email"
          icon="/icons/email.svg"
          placeholder="e.g. alex@email.com"
        />
        <Field
          id="password"
          label="Password"
          type="password"
          icon="/icons/password.svg"
          placeholder="Enter your password"
        />
        {!isSubmitting && error && (
          <p className="text-3 text-danger">{error}</p>
        )}
        <button
          className={clsx('btn-primary', isSubmitting && 'animate-pulse')}
          disabled={isSubmitting}
        >
          Login
        </button>
      </Form>
      <p className="mt-6 text-center">
        Don’t have an account?{' '}
        <Link
          to="signup"
          className="block w-fit mx-auto text-primary-300 sm:inline"
        >
          Create account
        </Link>
      </p>
    </>
  )
}
