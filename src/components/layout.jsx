import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="grid place-items-center p-8 sm:min-h-screen">
      <section className="w-full max-w-119 flex flex-col gap-y-16 sm:gap-y-13">
        <img
          className="sm:self-center"
          src="/images/logo-large.svg"
          alt="devlinks"
          width="183"
          height="40"
        />
        <div className="sm:(bg-default-50 p-10 rounded-3)">
          <Outlet />
        </div>
      </section>
    </main>
  )
}
