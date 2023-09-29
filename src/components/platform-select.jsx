import clsx from 'clsx'
import { useSelect } from 'downshift'
import platforms from '../lib/platforms'

/**
 * @typedef {import('downshift').UseSelectStateChange<string>} Changes
 * @param {Object} props
 * @param {string} props.initialSelectedItem
 * @param {(changes: Changes) => void} props.onSelectedItemChange
 */
export default function PlatformSelect({
  initialSelectedItem,
  onSelectedItemChange
}) {
  const {
    selectedItem,
    isOpen,
    highlightedIndex,
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items: [...platforms.keys()],
    initialSelectedItem,
    onSelectedItemChange
  })

  return (
    <div className="relative">
      <label className="mb-1 text-3" {...getLabelProps()}>
        Platform
      </label>
      <button
        className={clsx(
          'flex items-center justify-between w-full px-4 border font-400',
          'outline-none focus:(border-primary-300 shadow shadow-primary-300/25)'
        )}
        {...getToggleButtonProps()}
      >
        <div className="flex items-center gap-x-3 svg:text-default-300">
          {platforms.get(selectedItem)}
          {selectedItem}
        </div>
        <img
          className={clsx('w-3 transition-transform', isOpen && 'rotate-180')}
          src="/icons/chevron.svg"
          alt=""
          width="14"
          height="9"
        />
      </button>
      <ul
        className={clsx(
          !isOpen && 'hidden',
          'absolute inset-x-0 z-1 my-4 grid border bg-default-50 max-h-37vh',
          'rounded-2 shadow overflow-x-hidden children:last:children:border-0'
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          [...platforms.entries()].map(([name, icon], index) => {
            const isSelected = selectedItem === name

            return (
              <li
                className={clsx(
                  'px-4 cursor-default',
                  isSelected && 'text-primary-300',
                  highlightedIndex === index && 'bg-primary-100'
                )}
                key={name}
                {...getItemProps({ item: name, index })}
              >
                <div
                  className={clsx(
                    'flex items-center gap-x-3 py-3 border-b',
                    !isSelected && 'svg:text-default-300'
                  )}
                >
                  {icon}
                  <span>{name}</span>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
