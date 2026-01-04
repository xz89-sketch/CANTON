// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 请确保这里和你的 GitHub 仓库名完全一致（区分大小写）
const REPO_NAME = 'canton';

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`, // 生成相对路径资源，适配 GitHub Pages
  build: {
    outDir: 'dist', // 默认就是 dist，显式写出更清晰
    sourcemap: true, // 方便调试（可选）
  },
});
