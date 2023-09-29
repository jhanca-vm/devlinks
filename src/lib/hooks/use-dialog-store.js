/**
 * @typedef {import('react').MutableRefObject<HTMLDialogElement|null>} Reference
 * @typedef {import('zustand').UseBoundStore<
 *   import('zustand').StoreApi<{
 *     reference: Reference
 *     timeoutID?: number
 *     setReference: (reference: Reference) => void
 *     showDialog: () => void
 *   }>
 * >} UseDialogStoreType
 */

import { create } from 'zustand'

/** @type {UseDialogStoreType} */
const useDialogStore = create(set => ({
  reference: { current: null },
  setReference: reference => set({ reference }),
  showDialog: () =>
    set(({ timeoutID, reference }) => {
      clearTimeout(timeoutID)

      reference.current.show()

      return { timeoutID: setTimeout(() => reference.current.close(), 3000) }
    })
}))

export default useDialogStore
