import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CANTON/'  // ←←← 必须和你的 GitHub 仓库名完全一致！
});