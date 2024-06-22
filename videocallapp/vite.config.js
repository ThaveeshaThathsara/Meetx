import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@zegocloud')) {
              return 'zegocloud'; // Create a separate chunk for Zego Cloud
            }
            if (id.includes('react')) {
              return 'react'; // Create a separate chunk for React
            }
            return 'vendor'; // Create a separate chunk for other node modules
          }
        }
      },
    },
    chunkSizeWarningLimit: 3500, // Adjust this value as needed
  },
});
