import clsx from 'clsx'
import isEmpty from 'just-is-empty'
import useProfile from '../lib/hooks/use-profile'
import PictureField from '../components/picture-field'
import Field from '../components/field'

export default function Profile() {
  const {
    data,
    errors,
    hasChanges,
    setPicture,
    handleInput,
    handleBlur,
    save
  } = useProfile()
  const fieldClass = clsx(
    'sm:(grid grid-cols-[1fr_21.5rem] items-center gap-x-4)',
    'lg:grid-cols-[1fr_27rem]'
  )

  return (
    <>
      <div className="p-6 border-b md:p-10">
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
        <PictureField className={fieldClass} onChange={setPicture} />
        <div className="mt-6 grid gap-y-3 p-5 bg-default-100 rounded-3">
          <Field
            className={fieldClass}
            id="first-name"
            label="First name*"
            type="text"
            value={data.firstName}
            placeholder="e.g. John"
            error={errors.firstName}
            onInput={handleInput}
            onBlur={handleBlur}
          />
          <Field
            className={fieldClass}
            id="last-name"
            label="Last name*"
            type="text"
            value={data.lastName}
            placeholder="e.g. Appleseed"
            error={errors.lastName}
            onInput={handleInput}
            onBlur={handleBlur}
          />
          <Field
            className={fieldClass}
            id="email"
            label="Email"
            type="email"
            value={data.email}
            placeholder="e.g. email@example.com"
            error={errors.email}
            onInput={handleInput}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <button
        className="btn-primary m-4 sm:(my-6 mr-10 ml-auto w-fit px-7)"
        disabled={!hasChanges || !isEmpty(errors)}
        onClick={save}
      >
        Save
      </button>
    </>
  )
}
