import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },
});
