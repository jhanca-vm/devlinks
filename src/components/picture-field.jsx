import clsx from 'clsx'
import { useMemo } from 'react'
import useProfileStore from '../lib/hooks/use-profile-store'

/**
 * @param {Object} props
 * @param {string} props.className
 * @param {import('react').ChangeEventHandler<HTMLInputElement>} props.onChange
 */
export default function PictureField({ className, onChange }) {
  const picture = useProfileStore(state => state.picture)
  const pictureUrl = useMemo(() => {
    if (!picture) return null
    
    return typeof picture === 'string' ? picture : URL.createObjectURL(picture)
  }, [picture])

  return (
    <div className={clsx('mt-10 p-5 bg-default-100 rounded-3', className)}>
      <label htmlFor="picture" className="block mb-4 text-default-300 sm:mb-0">
        Profile picture
      </label>
      <div
        className={'sm:(grid grid-cols-[max-content_1fr] items-center gap-x-6)'}
      >
        <label
          className={clsx(
            pictureUrl && 'picture-input',
            'w-48 aspect-square bg-primary-100 bg-cover rounded-3 font-600',
            'text-primary-300 cursor-pointer'
          )}
          style={
            pictureUrl ? { backgroundImage: `url(${pictureUrl})` } : undefined
          }
        >
          <span
            className={clsx(
              'w-full h-full flex flex-col items-center justify-center',
              'gap-y-2 bg-primary-100/50'
            )}
          >
            <img src="/icons/image.svg" alt="" width="40" height="40" />+ Upload
            Image
          </span>
          <input
            type="file"
            id="picture"
            accept=".png, .jpg"
            hidden
            onChange={onChange}
          />
        </label>
        <p className="mt-6 text-3 sm:mt-0">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  )
}
