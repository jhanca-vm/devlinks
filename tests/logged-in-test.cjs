const { test, expect } = require('@playwright/test')

exports.test = test.extend({
  pathname: '',
  storageState: {
    origins: [
      {
        origin: 'http://localhost:4173',
        localStorage: [
          {
            name: 'sb-ccwsaynaptcvbvfgnnwv-auth-token',
            value: '{"user":{"email":"email@example.com"}}'
          }
        ]
      }
    ]
  },
  page: async ({ page, pathname }, use) => {
    await page.goto(pathname)

    await expect(page).toHaveURL(pathname)

    await use(page)
  }
})

exports.expect = expect
