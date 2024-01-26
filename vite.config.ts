import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   include: ['@types/react', '@types/react-dom'],
  // },
  cacheDir: undefined,
  plugins: [
    react({
      include: ['**/*.tsx'],
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  server: {
    hmr: {
      overlay: true,
    },
  },
});
