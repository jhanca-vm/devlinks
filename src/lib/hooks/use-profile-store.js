/**
 * @typedef {Object} Profile
 * @property {?File|string} picture
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 */

/**
 * @typedef {import('zustand').UseBoundStore<
 *   import('zustand').StoreApi<Profile & {
 *     update: (data: Partial<Profile) => void
 *   }>
 * >} UseProfileStoreType
 */

import { create } from 'zustand'
import getSession from '../utils/get-session'

const session = getSession()
const data = session?.user?.user_metadata

/** @type {UseProfileStoreType} */
const useProfileStore = create(set => ({
  picture: data?.picture || null,
  firstName: data?.firstName || '',
  lastName: data?.lastName || '',
  email: session?.user.email,
  update: data => set(data)
}))

export default useProfileStore
