import { useRef } from 'react'
import useDialogStore from '../lib/hooks/use-dialog-store'

export default function Dialog() {
  const reference = useRef(null)
  const setReference = useDialogStore(state => state.setReference)

  setReference(reference)

  return (
    <dialog ref={reference}>
      <div className="flex gap-x-2">
        <img
          src="/icons/save.svg"
          alt=""
          width="20"
          height="20"
          loading="lazy"
        />
        <p className="text-inherit">
          Your changes have been successfully saved!
        </p>
      </div>
    </dialog>
  )
}
