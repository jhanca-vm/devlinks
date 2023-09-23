import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [react(), unocss()],
  server: { host: true, port: 3000 }
})
