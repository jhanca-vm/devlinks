import { redirect } from 'react-router-dom'
import supabase from '../supabase'

/** @param {import('react-router-dom').ActionFunctionArgs} */
export default async function login({ request }) {
  const formData = await request.formData()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (error) return error.message

  return redirect('/editor/links')
}
