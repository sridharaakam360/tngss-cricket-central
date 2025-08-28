import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
  </HelmetProvider>
);
a