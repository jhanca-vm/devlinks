import clsx from 'clsx'
import camelCase from 'just-camel-case'

/**
 * @param {Object} props
 * @param {string} [props.className]
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
  className,
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
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={clsx('block mb-1 text-3', !icon && 'sm:text-default-300')}
      >
        {label}
      </label>
      <label
        className={clsx(
          'flex py-3 px-4 border bg-default-50 rounded-2 transition',
          error
            ? 'border-danger'
            : 'focus-within:(border-primary-300 shadow shadow-primary-300/25)'
        )}
      >
        {icon && (
          <img className="mr-3" src={icon} alt="" width="16" height="16" />
        )}
        <input
          className={error && type === 'url' ? 'text-danger' : undefined}
          type={type}
          name={camelCase(id)}
          id={id}
          value={value}
          placeholder={placeholder}
          onInput={onInput}
          onBlur={onBlur}
        />
        {error && (
          <span className="min-w-fit ml-3 text-3 text-danger">{error}</span>
        )}
      </label>
    </div>
  )
}
