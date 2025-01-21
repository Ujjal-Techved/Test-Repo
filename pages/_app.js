// pages/_app.js

// Import your global CSS here
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}