import compare from 'just-compare'
import getSession from '../lib/utils/get-session'
import useLinks from '../lib/hooks/use-links'
import useLinksStore from '../lib/hooks/use-links-store'
import LinksPlaceholder from '../components/links-placeholder'
import PlatformSelect from '../components/platform-select'
import Field from '../components/field'

export default function Links() {
  const session = getSession()
  const { links, updateLink, validateUrl, isEmpty, save } = useLinks()
  const addLink = useLinksStore(state => state.addLink)
  const removeLink = useLinksStore(state => state.removeLink)

  return (
    <section className="flex flex-col">
      <div className="p-6 border-b sm:p-10">
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button className="btn-outline mt-10 w-full" onClick={addLink}>
          + Add new link
        </button>
        {links.length === 0 ? (
          <LinksPlaceholder />
        ) : (
          links.map(({ id, platform, value, error }, index) => (
            <div
              className="mt-6 grid gap-y-3 p-5 bg-default-100 rounded-3"
              key={id}
            >
              <div className="flex justify-between text-default-300">
                <h2>Link #{index + 1}</h2>
                <button
                  className="p-0 font-400 hover:text-danger"
                  onClick={() => removeLink(id)}
                >
                  Remove
                </button>
              </div>
              <PlatformSelect
                initialSelectedItem={platform}
                onSelectedItemChange={({ selectedItem }) => {
                  updateLink(id, { platform: selectedItem })
                }}
              />
              <Field
                id={`link-${index + 1}`}
                label="Link"
                type="url"
                icon="/icons/link.svg"
                value={value}
                placeholder="e.g. https://www.github.com/johnappleseed"
                error={error}
                onInput={({ target: { value } }) => validateUrl(id, value)}
                onBlur={({ target: { value } }) => isEmpty(id, value)}
              />
            </div>
          ))
        )}
      </div>
      <button
        className="btn-primary m-4 sm:(my-6 mr-10 ml-auto w-fit px-7)"
        disabled={
          links.some(({ value, error }) => !value || error) ||
          compare(links, session?.user?.user_metadata?.links || [])
        }
        onClick={save}
      >
        Save
      </button>
    </section>
  )
}
