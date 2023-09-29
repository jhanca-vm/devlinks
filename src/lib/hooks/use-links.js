import { redirect } from 'react-router-dom'
import { minLength, safeParse, string, url } from 'valibot'
import supabase from '../supabase'
import useDialogStore from './use-dialog-store'
import useLinksStore from './use-links-store'

export default function useLinks() {
  const links = useLinksStore(state => state.links)
  const updateLink = useLinksStore(state => state.updateLink)
  const setLinks = useLinksStore(state => state.setLinks)
  const showDialog = useDialogStore(state => state.showDialog)

  /**
   * @param {string} id
   * @param {string} value
   */
  function validateUrl(id, value) {
    const { error } = safeParse(string([url('Please check the URL')]), value)

    updateLink(id, { value, error: error?.message })
  }

  /**
   * @param {string} id
   * @param {string} value
   */
  function isEmpty(id, value) {
    const { error } = safeParse(string([minLength(1, 'Can’t be empty')]), value)

    if (error) updateLink(id, { error: error.message })
  }

  async function save() {
    const { data, error } = await supabase.auth.updateUser({ data: { links } })

    if (error) {
      localStorage.clear()
      redirect('/')
    } else {
      setLinks(data.user.user_metadata.links)
      showDialog()
    }
  }

  return { links, updateLink, validateUrl, isEmpty, save }
}
