/**
 * Retrieves the user session stored in local storage.
 * @returns {import('@supabase/supabase-js').Session|null}
 */
export default function getSession() {
  const session = localStorage.getItem('sb-ccwsaynaptcvbvfgnnwv-auth-token')

  return session ? JSON.parse(session) : null
}
