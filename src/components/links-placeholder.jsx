import clsx from 'clsx'

export default function LinksPlaceholder() {
  return (
    <div
      className={clsx(
        'mt-6 py-11.5 px-5 bg-default-100 rounded-3 text-center md:py-20',
        'lg:py-15'
      )}
    >
      <img
        className="w-31 md:w-auto"
        src="/images/illustration-empty.svg"
        alt=""
        width="250"
        height="161"
      />
      <h2 className="text-6 my-6 md:(mt-10 text-8)">Let’s get you started</h2>
      <p className="max-w-122 mx-auto">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  )
}
