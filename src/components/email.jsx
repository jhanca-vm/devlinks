import clsx from 'clsx'

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.value
 */
export default function Email({ className, value }) {
  return (
    <span
      className={clsx(
        'block truncate text-default-300',
        value ? className : 'h-2 w-18 mx-auto bg-#eee rounded-full'
      )}
    >
      {value}
    </span>
  )
}
