import clsx from 'clsx'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import useLinksStore from '../lib/hooks/use-links-store'
import platforms from '../lib/platforms'

export default function PhoneMockup() {
  const location = useLocation()
  const links = useLinksStore(state => state.links)
  const list = useMemo(() => {
    if (location.pathname === '/editor/profile') return links

    const template = Array.from({ length: 5 })

    template.splice(0, links.length, ...links)

    return template
  }, [links, location])

  return (
    <section
      className={'mockup sticky top-0 hidden p-10 place-items-center lg:grid'}
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
          <div className="mt-6.5 mb-11 h-128 overflow-y-auto px-6">
            <figure className="h-24 w-24 mx-auto bg-#eee rounded-full"></figure>
            <span
              className={clsx(
                'block mt-6 mb-3',
                'h-4 w-40 mx-auto bg-#eee rounded-full'
              )}
            ></span>
            <span
              className={clsx('block', 'h-2 w-18 mx-auto bg-#eee rounded-full')}
            ></span>
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
