import { redirect } from 'react-router-dom'
import updateStores from '../utils/update-stores'
import supabase from '../supabase'

/** @param {import('react-router-dom').ActionFunctionArgs} */
export default async function login({ request }) {
  const formData = await request.formData()

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (error) return error.message

  updateStores(data.user)

  return redirect('/editor/links')
}
