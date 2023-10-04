import useProfileStore from '../hooks/use-profile-store'
import useLinksStore from '../hooks/use-links-store'

/** @param {import('@supabase/supabase-js').User} user  */
export default function updateStores(user) {
  useProfileStore.setState({
    email: user.email,
    firstName: user.user_metadata?.firstName || '',
    lastName: user.user_metadata?.lastName || '',
    picture: user.user_metadata?.picture || null
  })

  useLinksStore.setState({
    links: user.user_metadata?.links || []
  })
}
