import clsx from 'clsx'

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.value
 */
export default function Name({ className, value }) {
  return (
    <span
      className={clsx(
        'block mt-6 mb-2 truncate',
        value.trim() ? className : 'h-4 w-40 mx-auto bg-#eee rounded-full'
      )}
    >
      {value}
    </span>
  )
}
