import clsx from 'clsx'

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {'text'|'email'|'password'|'url'} props.type
 * @param {string} [props.icon]
 * @param {string} [props.value]
 * @param {string} props.placeholder
 * @param {string} [props.error]
 * @param {import('react').FormEventHandler<HTMLInputElement>} [props.onInput]
 * @param {import('react').FocusEventHandler<HTMLInputElement>} [props.onBlur]
 */
export default function Field({
  id,
  label,
  type,
  icon,
  value,
  placeholder,
  error,
  onInput,
  onBlur
}) {
  const inputAttributes = {
    type,
    id,
    name: id,
    value,
    placeholder,
    onInput,
    onBlur
  }

  return (
    <div>
      <label htmlFor={id} className="mb-1 text-3">
        {label}
      </label>
      {icon ? (
        <label
          className={clsx(
            'flex py-3 px-4 bg-default-50 rounded-2 border transition',
            error
              ? 'border-danger'
              : 'focus-within:(border-primary-300 shadow shadow-primary-300/25)'
          )}
        >
          <img className="mr-3" src={icon} alt="" width="16" height="16" />
          <input
            className={clsx(
              'w-full outline-none caret-primary-300',
              error && type === 'url' && 'text-danger'
            )}
            {...inputAttributes}
          />
          {error && (
            <span className="min-w-fit ml-3 text-3 text-danger">{error}</span>
          )}
        </label>
      ) : (
        <input {...inputAttributes} />
      )}
    </div>
  )
}
