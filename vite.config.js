import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      'ws-ddcfbdd-cbbe-jfsjiifbyd.cn-hongkong-vpc.fcapp.run',
      'ws-babbbcc-dcaa-gcstjyewbf.cn-hongkong-vpc.fcapp.run',
      'ws-edc-fb-a-dd-ohwwgwhvxc.cn-hongkong-vpc.fcapp.run',
      'localhost',
      '127.0.0.1'
    ]
  }
})

