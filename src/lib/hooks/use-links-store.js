/**
 * @typedef {Object} Link
 * @property {string} id
 * @property {string} platform
 * @property {string} value
 * @property {string} [error]
 */

/**
 * @typedef {import('zustand').UseBoundStore<
 *   import('zustand').StoreApi<{
 *     links: Link[]
 *     addLink: () => void
 *     updateLink: (id: string, data: Partial<Link>) => void
 *     removeLink: (id: string) => void
 *     setLinks: (links: Link[]) => void
 *   }>
 * >} UseLinksStoreType
 */

import { create } from 'zustand'
import getSession from '../utils/get-session'

/** @type {UseLinksStoreType} */
const useLinksStore = create(set => ({
  links: getSession().user?.user_metadata?.links || [],
  addLink: () => {
    set(({ links }) => ({
      links: [
        ...links,
        { id: crypto.randomUUID(), platform: 'GitHub', value: '' }
      ]
    }))
  },
  updateLink: (id, data) => {
    set(({ links }) => ({
      links: links.map(link => {
        return link.id === id ? Object.assign(link, data) : link
      })
    }))
  },
  removeLink: id => {
    set(({ links }) => ({ links: links.filter(link => link.id !== id) }))
  },
  setLinks: links => set({ links })
}))

export default useLinksStore
