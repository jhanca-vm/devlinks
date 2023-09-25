import { redirect } from 'react-router-dom'
import { email, minLength, parseAsync, string } from 'valibot'
import supabase from '../supabase'

/** @param {import('react-router-dom').ActionFunctionArgs} */
export default async function signup({ request }) {
  const formData = await request.formData()

  const [emailAddress, password] = await Promise.allSettled([
    parseAsync(
      string([minLength(1, 'Can’t be empty'), email()]),
      formData.get('email')
    ),
    parseAsync(
      string([minLength(8, 'Please check again')]),
      formData.get('password')
    )
  ])

  if (emailAddress.status === 'fulfilled' && password.status === 'fulfilled') {
    const { error } = await supabase.auth.signUp({
      email: emailAddress.value,
      password: password.value
    })

    if (error) return { auth: error.message }

    return redirect('/editor/links')
  }

  const errors = {
    email: emailAddress.reason?.message,
    password: password.reason?.message
  }

  return errors
}
