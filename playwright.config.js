import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173
  }
})
