import { Link } from 'react-router-dom'
import getSession from '../lib/utils/get-session'
import ProfilePicture from '../components/profile-picture'
import Name from '../components/name'
import Email from '../components/email'
import platforms from '../lib/platforms'
import clsx from 'clsx'

export default function Preview() {
  const session = getSession()
  const { picture, firstName, lastName, links } = session.user.user_metadata
  const list = links || []

  return (
    <>
      <div
        className={clsx(
          'absolute inset-0 -z-1 sm:(h-89 bg-primary-300 rounded-b-8)'
        )}
      />
      <header className="flex py-4 px-6 sm:(m-6 bg-default-50 rounded-3)">
        <Link
          to="/editor/links"
          className="btn-outline flex py-3 px-4 rounded-2 font-600"
        >
          Back to Editor
        </Link>
      </header>
      <main className="py-16 px-6 md:py-25 lg:py-20">
        <section
          className={clsx(
            'max-w-87 mx-auto text-center',
            'sm:(py-12 px-14 bg-default-50 rounded-6 shadow)'
          )}
        >
          <ProfilePicture className="w-26" picture={picture} />
          <Name
            className="font-700 text-8"
            value={`${firstName} ${lastName}`}
          />
          <Email value={session.user.email} />
          <ul className="mt-14 mx-auto w-59 grid gap-y-5 text-default-50">
            {list.map(({ id, platform, value }) => (
              <li key={id}>
                <a
                  className={clsx(
                    'flex justify-between gap-x-2 p-4',
                    `bg-${platform.toLowerCase()} rounded-2 svg:w-5`
                  )}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                >
                  {platforms.get(platform)}
                  <span className="flex-grow text-left">{platform}</span>
                  <img src="/icons/arrow.svg" alt="" width="16" height="16" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
