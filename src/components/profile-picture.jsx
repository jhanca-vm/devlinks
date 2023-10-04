import clsx from 'clsx'

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {File|string} props.picture
 */
export default function ProfilePicture({ className, picture }) {
  return (
    <figure
      className={clsx(
        className,
        'aspect-square mx-auto bg-#eee rounded-full overflow-hidden',
        picture && 'border-4 border-primary-300'
      )}
    >
      {picture && (
        <img
          className="w-full h-full object-cover"
          src={
            typeof picture === 'string' ? picture : URL.createObjectURL(picture)
          }
          alt=""
        />
      )}
    </figure>
  )
}
