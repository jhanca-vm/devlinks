import clsx from 'clsx'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import platforms from '../lib/platforms'
import useLinksStore from '../lib/hooks/use-links-store'
import useProfileStore from '../lib/hooks/use-profile-store'

export default function PhoneMockup() {
  const location = useLocation()
  const picture = useProfileStore(state => state.picture)
  const firstName = useProfileStore(state => state.firstName)
  const lastName = useProfileStore(state => state.lastName)
  const email = useProfileStore(state => state.email)
  const links = useLinksStore(state => state.links)
  const list = useMemo(() => {
    if (location.pathname === '/editor/profile') return links

    const template = Array.from({ length: 4 })

    template.splice(0, links.length, ...links)

    return template
  }, [links, location])

  return (
    <section
      className={'mockup sticky top-0 hidden p-10 place-items-center xl:grid'}
    >
      <div className="w-77.5 p-3 border rounded-14">
        <div className="h-full border rounded-11">
          <div className="-mt-px mx-12.5 flex bg-default-50">
            <span className="h-3.25 w-8 border-t border-r rounded-tr-3" />
            <span
              className={
                'mt-3.25 -mx-px h-3.5 flex-grow border-b border-x rounded-b-3.5'
              }
            />
            <span className="h-3.25 w-8 border-t border-l rounded-tl-3" />
          </div>
          <div className="mt-6.5 mb-11 h-120 overflow-y-auto px-6 text-center">
            <figure
              className={clsx(
                'h-24 w-24 mx-auto bg-#eee rounded-full overflow-hidden',
                picture && 'border-4 border-primary-300'
              )}
            >
              {picture && (
                <img
                  className="w-full h-full object-cover"
                  src={
                    typeof picture === 'string'
                      ? picture
                      : URL.createObjectURL(picture)
                  }
                  alt=""
                />
              )}
            </figure>
            <span
              className={clsx(
                'block mt-6 mb-3 font-600 text-4.5 truncate',
                !firstName &&
                  !lastName &&
                  'h-4 w-40 mx-auto bg-#eee rounded-full'
              )}
            >
              {firstName} {lastName}
            </span>
            <span
              className={clsx(
                'block text-3.5 truncate text-default-300',
                !email && 'h-2 w-18 mx-auto bg-#eee rounded-full'
              )}
            >
              {email}
            </span>
            <ul className="mt-14 grid gap-y-5">
              {list.map((link, index) => (
                <li
                  className={clsx(
                    'h-11 px-4 rounded-2 text-default-50',
                    link && 'flex items-center justify-between gap-x-2',
                    link ? `bg-${link.platform.toLowerCase()}` : 'bg-#eee'
                  )}
                  key={`PhoneMockup-Link-${index}`}
                >
                  {link && (
                    <>
                      {platforms.get(link.platform)}
                      <span className="flex-grow text-3">{link.platform}</span>
                      <img
                        src="/icons/arrow.svg"
                        alt=""
                        width="16"
                        height="16"
                      />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
