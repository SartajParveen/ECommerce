import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ECommerce/', // Match the repository name exactly (case-sensitive)
})