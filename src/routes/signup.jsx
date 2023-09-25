import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import clsx from 'clsx'
import Field from '../components/field'

export default function Signup() {
  const errors = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <h1>Create account</h1>
      <p>Let’s get you started sharing your links!</p>
      <Form method="post" className="mt-10 grid gap-y-6" noValidate>
        <Field
          id="email"
          label="Email address"
          type="email"
          icon="/icons/email.svg"
          placeholder="e.g. alex@email.com"
          error={errors?.email}
        />
        <Field
          id="password"
          label="Create password"
          type="password"
          icon="/icons/password.svg"
          placeholder="At least .8 characters"
          error={errors?.password}
        />
        {!isSubmitting && errors?.auth && (
          <p className="text-3 text-danger">{errors.auth}</p>
        )}
        <button
          className={clsx('btn-primary', isSubmitting && 'animate-pulse')}
          disabled={isSubmitting}
        >
          Create new account
        </button>
      </Form>
      <p className="mt-6 text-center">
        Already have an account?{' '}
        <Link to="/" className="block w-fit mx-auto text-primary-300 sm:inline">
          Login
        </Link>
      </p>
    </>
  )
}
