import { expect, test } from '@playwright/test'

test('display errors if invalid data is entered', async ({ page }) => {
  await page.goto('/signup')

  const emailInput = page.getByLabel('Email address')
  const passwordInput = page.getByLabel('Create password')
  const submitButton = page.getByRole('button', { name: 'Create new account' })

  await emailInput.fill('ivalid@email')
  await passwordInput.fill('1234')
  await submitButton.click()

  await expect(page.getByText('Invalid email')).toBeVisible()
  await expect(page.getByText('Please check again')).toBeVisible()

  await emailInput.clear()
  await passwordInput.clear()
  await submitButton.click()

  await expect(page.getByText('Can’t be empty')).toBeVisible()
  await expect(page.getByText('Please check again')).toBeVisible()
})
