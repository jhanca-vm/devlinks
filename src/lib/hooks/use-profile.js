import { useMemo, useState } from 'react'
import { redirect } from 'react-router-dom'
import { email, safeParse, string } from 'valibot'
import compare from 'just-compare'
import flush from 'just-flush'
import isEmpty from 'just-is-empty'
import { STORAGE_URL } from '../constants'
import getSession from '../utils/get-session'
import supabase from '../supabase'
import useDialogStore from './use-dialog-store'
import useProfileStore from './use-profile-store'

const { user } = getSession()

export default function useProfile() {
  const [isSaving, setIsSaving] = useState(false)
  const { update, ...data } = useProfileStore(store => store)
  const [errors, setErrors] = useState({})
  const showDialog = useDialogStore(state => state.showDialog)

  const hasChanges = useMemo(() => {
    return (
      !isSaving &&
      data.firstName &&
      data.lastName &&
      !compare(data, {
        picture: user?.user_metadata?.picture || null,
        firstName: user?.user_metadata?.firstName || '',
        lastName: user?.user_metadata?.lastName || '',
        email: user.email
      })
    )
  }, [isSaving, data])

  /** @type {import('react').ChangeEventHandler<HTMLInputElement>} */
  const setPicture = ({ target: { files } }) => {
    const file = files[0]

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const image = new Image()

      image.addEventListener('load', () => {
        if (image.width <= 1024 && image.height <= 1024) {
          update({ picture: file })
        }
      })

      image.src = URL.createObjectURL(file)
    }
  }

  /** @type {import('react').FormEventHandler<HTMLInputElement>} */
  const handleInput = ({ target: { name, value } }) => {
    update({ [name]: value })

    if (name === 'email') {
      const { error } = safeParse(string([email()]), value)

      setErrors(flush({ ...errors, email: error?.message }))
    } else {
      setErrors(
        flush({ ...errors, [name]: isEmpty(value) ? 'Can’t be empty' : null })
      )
    }
  }

  /** @type {import('react').FocusEventHandler<HTMLInputElement>} */
  const handleBlur = ({ target: { name, value } }) => {
    if (isEmpty(value)) setErrors({ ...errors, [name]: 'Can’t be empty' })
  }

  const save = async () => {
    /** @type {?string} */
    let picture = null

    setIsSaving(true)

    if (data.picture && typeof data.picture !== 'string') {
      const result = await supabase.storage
        .from('profiles')
        .upload(`${user.id}`, data.picture, { upsert: true })

      if (!result.error) picture = `${STORAGE_URL}/profiles/${result.data.path}`
    }

    const result = await supabase.auth.updateUser({
      email: data.email,
      data: { picture, firstName: data.firstName, lastName: data.lastName }
    })

    if (result.error) {
      localStorage.clear()
      redirect('/')
    } else {
      showDialog()
    }

    setIsSaving(false)
  }

  return { data, errors, hasChanges, setPicture, handleInput, handleBlur, save }
}
