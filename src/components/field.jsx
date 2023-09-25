import clsx from 'clsx'

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {'text'|'email'|'password'} props.type
 * @param {string=} props.icon
 * @param {string} props.placeholder
 * @param {string=} props.error
 */
export default function Field({ id, label, type, icon, placeholder, error }) {
  const inputAttributes = { type, id, name: id, placeholder }

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
              : 'border-default-200 focus-within:(border-primary-300 shadow)'
          )}
        >
          <img className="mr-3" src={icon} alt="" width="16" height="16" />
          <input
            className="w-full outline-none caret-primary-300"
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
