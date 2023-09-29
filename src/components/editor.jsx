import clsx from 'clsx'
import { Link, NavLink, Outlet } from 'react-router-dom'
import LinkIcon from './icons/link'
import ProfileIcon from './icons/profile'
import Dialog from './dialog'
import PhoneMockup from './phone-mockup'

const navLinkClassName = ({ isActive }) => {
  return clsx(
    'flex items-center gap-x-2 py-3 px-7 rounded-2 hover:text-primary-300',
    isActive && 'bg-primary-100 text-primary-300'
  )
}

export default function Editor() {
  return (
    <>
      <header
        className={clsx(
          'flex items-center justify-between bg-default-50 py-4 pl-6 pr-4',
          'font-600 sm:(m-6 rounded-3)'
        )}
      >
        <picture className="md:w-36.5">
          <source
            srcSet="/images/logo-large.svg"
            media="(min-width: 768px)"
            width="183"
            height="40"
          />
          <img
            src="/images/logo-small.svg"
            alt="devlinks"
            width="32"
            height="32"
          />
        </picture>
        <nav className="flex text-default-300 lg:gap-x-4">
          <NavLink to="/editor/links" className={navLinkClassName}>
            <LinkIcon />
            <span className="hidden sm:inline">Links</span>
          </NavLink>
          <NavLink to="/editor/profile" className={navLinkClassName}>
            <ProfileIcon />
            <span className="hidden sm:inline">Profile Details</span>
          </NavLink>
        </nav>
        <Link to="/preview" className="btn-outline flex py-3 px-4 rounded-2">
          <img
            className="md:hidden"
            src="/icons/preview.svg"
            alt=""
            width="20"
            height="20"
          />
          <span className="hidden md:inline">Preview</span>
        </Link>
      </header>
      <main
        className={clsx(
          'm-4 bg-default-50 rounded-3 sm:m-6',
          'lg:(grid grid-cols-[40%_1fr] gap-x-6 bg-transparent)',
          'lg:children:(h-fit bg-default-50 rounded-3)'
        )}
      >
        <PhoneMockup />
        <Outlet />
      </main>
      <Dialog />
    </>
  )
}
