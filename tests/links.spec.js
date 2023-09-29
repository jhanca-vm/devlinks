import { expect, test } from './logged-in-test.cjs'

test.use({ pathname: '/editor/links' })

test('create and delete links', async ({ page }) => {
  await page.getByRole('button', { name: '+ Add new link' }).click()

  await expect(page.getByRole('heading', { name: 'Link #1' })).toBeVisible()

  await page.getByRole('button', { name: 'Remove' }).click()

  await expect(page.getByRole('heading', { name: 'Link #1' })).not.toBeVisible()
})

test('display an error when the link input is left empty', async ({ page }) => {
  await page.getByRole('button', { name: '+ Add new link' }).click()

  const input = page.getByLabel('Link')

  await input.focus()
  await input.blur()

  await expect(page.getByText('Can’t be empty')).toBeVisible()
})

test('display an error when an invalid URL is entered', async ({ page }) => {
  await page.getByRole('button', { name: '+ Add new link' }).click()
  await page.getByLabel('Link').fill('Invalid URL')

  await expect(page.getByText('Please check the URL')).toBeVisible()
})

test('the save button is enabled only with changes and no errors', async ({
  page
}) => {
  const button = page.getByRole('button', { name: 'Save' })

  await expect(button).toBeDisabled()

  await page.getByRole('button', { name: '+ Add new link' }).click()
  await page.getByLabel('Link').fill('Invalid URL')

  await expect(button).toBeDisabled()

  await page.getByLabel('Link').fill('http://localhost:4173')

  await expect(button).toBeEnabled()
})
