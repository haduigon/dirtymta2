import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';  // Assuming you have a Navbar component
import '@/styles/globals.css';  // Import global styles
import '@fontsource/roboto';  // Import Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// The App component wraps all pages
function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Shared Navbar across all pages */}
      <Navbar />
      {/* Render the specific page content */}
      <Component {...pageProps} />
    </div>
  );
}

export default App;